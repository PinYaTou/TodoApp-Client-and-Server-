const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const  todos= require('./routes/todos')
const  users= require('./routes/users')
const types = require('./routes/types')
const hobbies = require('./routes/hobbies')
const mongoConnect = require('./db')
const cors = require('koa2-cors')
//启动数据库
mongoConnect()


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(cors())

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(todos.routes(), todos.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(types.routes(), types.allowedMethods())
app.use(hobbies.routes(), hobbies.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
