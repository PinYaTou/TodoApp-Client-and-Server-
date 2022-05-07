const add = async (model, params, ctx) => {
    let rel = await model.create(params)
    try {
        if (rel) {
            let userList = await model.find()
            ctx.body = {
                code: 200,
                meg: "添加成功",
                data: userList
            }
        }
        else {
            ctx.body = {
                code: 300,
                msg: "添加失败"
            }
        }
    } catch (err) {
        ctx.body = {
            code: 400,
            meg: "添加异常"
        }
        console.error(err,);
    }
}

const update = async (model, where, params, ctx) => {
    await model.updateOne(where, params)
    try {
        ctx.body = {
            data: params
        }
    } catch (err) {
        ctx.body = {
            code: 400,
            meg: "修改异常"
        }
        console.error(err);
    }
}

const del = async (model, where, ctx) => {
    await model.findOneAndDelete(where)
    try {
        let todoList = await model.find()
        ctx.body = {
            data: todoList
        }
    }
    catch (err) {
        ctx.body = {
            code: 400,
            meg: "删除异常"
        }
        console.error(err);
    }
}

const find = (model, ctx) => (
    model.find()
        .then(rel => {
            ctx.body = {
                rel
            }
        })
        .catch(err => {
            ctx.body = {
                code: 400,
                meg: "查询异常"
            }
            console.error(err);
        })
)

const findOne = (model, where, ctx) => (
    model.findOne(where)
        .then(rel => {
            ctx.body = {
                rel
            }
        })
        .catch(err => {
            ctx.body = {
                code: 400,
                meg: "查询异常"
            }
            console.error(err);
        })
)

module.exports = {
    add,
    update,
    del,
    find,
    findOne
}