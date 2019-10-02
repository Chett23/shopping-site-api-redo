module.exports = (req, res, next) => {
  res.header('access-control-allow-origin', 'https://shop-v2-helio.herokuapp.com')
  res.header('access-Control-allow-credentials', 'true')
  res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE')
  res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
}