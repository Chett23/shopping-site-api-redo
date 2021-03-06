const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const monk = require('monk');
const headers = require('./headers');

const port = process.env.PORT || 4000
const url = process.env.DB_URL || 'mongodb://admin:admin@chesterfirstdb-shard-00-00-i7cmi.mongodb.net:27017,chesterfirstdb-shard-00-01-i7cmi.mongodb.net:27017,chesterfirstdb-shard-00-02-i7cmi.mongodb.net:27017/Shopping-siteDB?ssl=true&replicaSet=ChesterFirstDB-shard-0&authSource=admin&retryWrites=true'
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
    .then((result) => { 
      res.send(result) })
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
  cart.insert({...req.body, qty: 1, }).then(() => res.send())
})

app.put('/cart/inc', (req, res) => {
  cart.findOne(req.body._id).then(item => cart.findOneAndUpdate(item._id, {...item, qty: item.qty + 1}))
  .then(() => {
    items.findOne(req.body._id).then(item => items.findOneAndUpdate(item._id, {...item, stock: (item.stock - 1)}))
    .then(() => res.send())
  })
})

app.put('/cart/dec', (req, res) => {
  cart.findOne(req.body._id).then(item => cart.findOneAndUpdate(item._id, {...item, qty: item.qty - 1}))
  .then(() => {
    items.findOne(req.body._id).then(item => items.findOneAndUpdate(item._id, {...item, stock: (item.stock + 1)}))
    .then(() => res.send())
  })
})

app.delete('/cart/:_id', (req, res) => {
  cart.findOneAndDelete(req.params._id)
    .then((result) => {
      res.send(result)
    })
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