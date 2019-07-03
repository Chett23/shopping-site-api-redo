const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const monk = require('monk');
const headers = require('./headers');

const port = process.env.PORT || 8080
const url = process.env.DB_URL
const db = monk(url);
db.then(() => {
  console.log('connected to DB')
})
const items = db.get('Items');
const cart = db.get('Cart');
const users = db.get('Users');
const secret = 'shh. dont tell im a secret';


app.use(express.static('build'))
app.use(headers)
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('success')
})

app.get('/items', (req, res) => {
  items.find({})
    .then((result) => { res.send(result) })
    .catch((err) => { res.send(err) })
})

app.post('/items', (req, res) => {
  if (req.body._id) {
    items.findOneAndUpdate(req.body._id, req.body).then(result => res.send(result))
  } else {
    items.insert(req.body).then(result => res.send(result))
  }
})

app.delete('/items/:id', (req, res) => {
  items.findOneAndDelete(req.params.id)
    .then(result => res.send(result))
})

app.get('/cart', (req, res) => {
  cart.find({}).then(cart => { res.send(cart) })
})

app.post('/cart', (req, res) => {
  //managing qty in stock
  items.findOne(req.body._id)
    .then(item => {
      if (item.stock <= 0) {
        res.send(`Were sorry, but ${item.name} is no longer in stock`)
      } else {
        let item = req.body
        item.stock = item.stock - 1
        items.findOneAndUpdate(req.body._id, item)
      }
    })
  //adding item to cart and managing qty in cart
  cart.findOne(req.body._id)
    .then((item) => {
      if (item === null) {
        req.body.qty = 1
        req.body.stock--
        cart.insert(req.body)
      } else {
        let tempQty = item.qty + 1
        let tempStock = item.stock - 1
        cart.update({ _id: req.body._id }, { $set: { qty: tempQty, stock: tempStock } })
      }
    }).then(result => {
      res.send(result)
    }).catch(err => {
      res.send(err)
    })
})

app.delete('/cart/:_id', (req, res) => {
  cart.findOne(req.params._id)
    .then((item) => {
      if (item.qty === 1) {
        cart.findOneAndDelete(item._id)
      } else {
        let tempQty = item.qty - 1
        cart.update({ _id: req.params._id }, { $set: { qty: tempQty } })
      }
    }).then(result => {
      res.send(result)
    });
});

app.get('/users', (req, res) => {
  users.find({}).then(users => { res.send(users) })
})

app.post('/login', (req, res) => {
  users.findOne({ username: req.body.username })
    .then(user => {
      let { password, ...userRed } = user
      if (req.body.password === password) {
        res.send(userRed)
      } else {
        res.send(401, 'No valid User')
      }
    })
    .catch(err => {
      res.send('err')
    })
})

app.post('/login/create', (req, res) => {
  if (req.body._id) {
    users.findOneAndUpdate(req.body._id, req.body)
      .then(user => {
        let { password, ...userRed } = user
        res.send(userRed)
      })
  } else {
    users.insert(req.body)
      .then(user => {
        let { password, ...userRed } = user
        res.send(userRed)
      })
  }
})

app.post('/login/users/password-reset', (req, res) => {
  users.findOne({ username: req.body.username })
    .then(user => {
      if (user.username === "Admin") { res.send(401, "Cannot change root admin password") }
      let tempUser = user
      tempUser.password = req.body.password
      users.findOneAndUpdate(user._id, tempUser)
        .then(user => {
          let { password, ...userRed } = user
          res.send(userRed)
        })
    })
})

app.delete('/users/:_id', (req, res) => {
  users.findOneAndDelete(req.params._id)
    .then(result => {
      res.send(result)
    })
});



app.listen(port, (err) => {
  if (err) { throw err }
  console.log(`server up and running on ${port}`)
})