const { Type } = require('../models')

const curd = require('./curdType')

//查询全部type
const typesFindAll = async (ctx) => {
    await curd.findUserTypes(Type, { user: ctx.params.user }, ctx);
}


//更新type
const typesUpdate = async (ctx) => {
    const { id, length } = ctx.request.body
    await curd.updateCurrentType(Type, { id }, { length }, ctx)
}

module.exports = {
    typesFindAll,
    typesUpdate
}