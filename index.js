const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const monk = require('monk');
const headers = require('./headers');

const port = process.env.PORT || 5000
const url = process.env.DB_URL || 'mongodb://admin:admin@chesterfirstdb-shard-00-00-i7cmi.mongodb.net:27017,chesterfirstdb-shard-00-01-i7cmi.mongodb.net:27017,chesterfirstdb-shard-00-02-i7cmi.mongodb.net:27017/Shopping-siteDB?ssl=true&replicaSet=ChesterFirstDB-shard-0&authSource=admin&retryWrites=true'
const db = monk(url);
db.then(() => {
  console.log('connected to DB')
})
const items = db.get('Items');
const cart = db.get('Cart');
const secret = 'shh. dont tell im a secret';

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
  cart.findOne(req.body._id)
    .then((item) => {
      if (item === null) {
        req.body.qty = 1
        cart.insert(req.body)
      } else {
        let tempQty = item.qty + 1
        cart.update({ _id: req.body._id }, { $set: { qty: tempQty } })
      }
    }).then(result => {
      res.send(result)
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

app.listen(port, (err) => {
  if (err) { throw err }
  console.log(`server up and running on ${port}`)
})