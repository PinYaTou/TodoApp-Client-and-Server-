const router = require('koa-router')()

const { typesFindAll,typesUpdate} = require('../controller/types')

  router.prefix('/types')

 //查询全部types

router.get('/find/:user', typesFindAll)

 //查询全部types

 router.post('/update', typesUpdate)

module.exports = router
