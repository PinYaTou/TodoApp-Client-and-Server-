const { Hobbies } = require('../models')

const curd = require('./curdHobby')

//添加Todo
const hobbyAdd = async (ctx) => {
    const { id = '', name = '', done = '', date = '', Detail = '',user = '' } = ctx.request.body;
    await curd.add(Hobbies, {user},
        { id, name, done, date, Detail ,user},
        ctx)
}

//修改Todo是否完成
const hobbyUpdate = async (ctx) => {
    const { id, done ,user} = ctx.request.body
    await curd.update(Hobbies, { id },{user}, {done}, ctx)
}

//修改当前hobbyName
const hobbyUpdateName = async (ctx) => {
    const { id,  name } = ctx.request.body
    await curd.updateName(Hobbies, { id }, {
        name
    }, ctx)
}

//修改当前hobbyDetail
const hobbyUpdateDetail = async (ctx) => {
    const { id,  Detail } = ctx.request.body
    await curd.updateName(Hobbies, { id }, {
        Detail
    }, ctx)
}

//删除hobby
const hobbyDelete = async (ctx) => {
    const { id,user } = ctx.request.body;
    await curd.del(Hobbies, { id },{user}, ctx)
}


//查询全部用户信息
const hobbyFindAll = async (ctx) => {
    await curd.find(Hobbies, ctx);
}


//查询用户的hobbys
const hobbyFindUser = async (ctx) => {
    await curd.findUserHobbies(Hobbies, { user: ctx.params.user }, ctx);
}

//查询当前hobby
const hobbyFindCurrent = async (ctx) => {
    await curd.findCurrentHobby(Hobbies, { id: ctx.params.id }, ctx);
}

module.exports = {
    hobbyAdd,
    hobbyUpdate,
    hobbyDelete,
    hobbyFindAll,
    hobbyFindUser,
    hobbyFindCurrent,
    hobbyUpdateName,
    hobbyUpdateDetail
}