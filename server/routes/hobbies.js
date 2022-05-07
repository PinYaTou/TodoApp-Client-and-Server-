const router = require('koa-router')()

const { hobbyAdd,
  hobbyUpdate,
  hobbyDelete,
  hobbyFindAll,
  hobbyFindUser,
  hobbyFindCurrent,
  hobbyUpdateName,
  hobbyUpdateDetail } = require('../controller/hobbies')
router.prefix('/hobbies')

//添加用户
router.post('/add', hobbyAdd)

//修改用户信息

router.post('/update', hobbyUpdate)


//修改当前hobbyName
router.post('/updateName', hobbyUpdateName)

//修改当前Detail
router.post('/updateDetail', hobbyUpdateDetail)

//删除用户信息

router.post('/del', hobbyDelete)

//查询全部用户信息

router.get('/find', hobbyFindAll)


//查询用户的hobbys
router.get('/find/:user', hobbyFindUser)

//查询当前hobby
router.get('/findCurrent/:id', hobbyFindCurrent)

module.exports = router
