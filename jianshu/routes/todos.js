const router = require('koa-router')()

const { todoAdd,
  todoUpdate,
  todoDelete,
  todoFindAll,
  todoFindUser,
  todoFindCurrent,
  todoUpdateName,
  todoUpdateDetail,
  todoAddDate } = require('../controller/todos')
router.prefix('/todos')

//添加用户
router.post('/add', todoAdd)

//修改todo状态
router.post('/update', todoUpdate)

//添加日期
router.post('/addDate', todoAddDate)

//修改当前todoName
router.post('/updateName', todoUpdateName)

//修改当前Detail
router.post('/updateDetail', todoUpdateDetail)

//删除todo
router.post('/del', todoDelete)

//查询全部todo
router.get('/find', todoFindAll)


//查询用户的todos
router.get('/find/:user', todoFindUser)

//查询当前todo
router.get('/findCurrent/:id', todoFindCurrent)

module.exports = router
