const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
    'PUT'
  ],

  allowedHeaders: [
    'Content-Type'
  ]
}

server.use(cors(corsOpts))


server.use(cors())
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 8000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
