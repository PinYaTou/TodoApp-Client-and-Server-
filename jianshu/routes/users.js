const router = require('koa-router')()

const { userAdd,
  userUpdate,
  userDelete,
  userFindAll } = require('../controller/users')
router.prefix('/users')

//添加用户
router.post('/add', userAdd)

//修改用户信息

router.post('/update', userUpdate)

//删除用户信息

router.post('/del', userDelete)

//查询全部用户信息

router.get('/find', userFindAll)



module.exports = router
