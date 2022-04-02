const whitelist = [
  'localhost:3000',
  'localhost:3001',
  'http://localhost:3001',
  'http://localhost:3000',
  'http://localhost:3000/register'
]
const corsOptions = {
  origin : (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    }else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200
}

module.exports = corsOptions
