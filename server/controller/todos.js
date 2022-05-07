const { Todos } = require('../models')

const curd = require('./curdTodo')

//添加Todo
const todoAdd = async (ctx) => {
    const { id = '', name = '', done = '', date = '', Detail = '',user = '' } = ctx.request.body;
    await curd.add(Todos, {user},
        { id, name, done, date, Detail ,user},
        ctx)
}

//修改Todo是否完成
const todoUpdate = async (ctx) => {
    const { id, done ,user} = ctx.request.body
    await curd.update(Todos, { id },{user}, {done}, ctx)
}

//添加Todo日期
const todoAddDate = async (ctx) => {
    const { id, date ,user} = ctx.request.body
    await curd.addDate(Todos, { id },{user}, {date}, ctx)
}

//修改当前todoName
const todoUpdateName = async (ctx) => {
    const { id,  name } = ctx.request.body
    await curd.updateName(Todos, { id }, {
        name
    }, ctx)
}

//修改当前todoDetail
const todoUpdateDetail = async (ctx) => {
    const { id,  Detail } = ctx.request.body
    await curd.updateName(Todos, { id }, {
        Detail
    }, ctx)
}

//删除Todo
const todoDelete = async (ctx) => {
    const { id,user } = ctx.request.body;
    await curd.del(Todos, { id },{user}, ctx)
}


//查询全部用户信息
const todoFindAll = async (ctx) => {
    await curd.find(Todos, ctx);
}


//查询用户的todos
const todoFindUser = async (ctx) => {
    await curd.findUserTodos(Todos, { user: ctx.params.user }, ctx);
}

//查询当前todo
const todoFindCurrent = async (ctx) => {
    await curd.findCurrentTodo(Todos, { id: ctx.params.id }, ctx);
}

module.exports = {
    todoAdd,
    todoUpdate,
    todoDelete,
    todoFindAll,
    todoFindUser,
    todoFindCurrent,
    todoUpdateName,
    todoUpdateDetail,
    todoAddDate
}