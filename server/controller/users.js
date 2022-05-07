const { Users } = require('../models')

const curd = require('./curdUser')

//添加User
const userAdd = async (ctx) => {
    const { id = '', avatar = '', user = '', userName = '' } = ctx.request.body;
    await curd.add(Users, { id, avatar, user, userName }, ctx)
}

//修改User是否完成
const userUpdate = async (ctx) => {
    const { user, userName } = ctx.request.body
    await curd.update(Users, { user }, {
        userName,
    }, ctx)
}


//删除User
const userDelete = async (ctx) => {
    const { id } = ctx.request.body;
    await curd.del(Users, { id: id }, ctx)
}


//查询全部User信息
const userFindAll = async (ctx) => {
    await curd.find(Users, ctx);
}


module.exports = {
    userAdd,
    userUpdate,
    userDelete,
    userFindAll
}