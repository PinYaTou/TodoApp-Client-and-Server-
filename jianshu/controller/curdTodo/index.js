const add = async (model,where, params, ctx) => {
    let rel = await model.create(params)
    try {
        if (rel) {
            let todoList = await model.find(where)
            ctx.body = {
                code: 200,
                meg: "添加成功",
                data: todoList
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

const update = async (model, where,where2, params, ctx) => {
    await model.updateOne(where, params)
    try {
        let todoList = await model.find(where2)
        ctx.body = {
            data: todoList
        }
    } catch (err) {
        ctx.body = {
            code: 400,
            meg: "修改异常"
        }
        console.error(err);
    }
}

const addDate = async (model, where,where2, params, ctx) => {
    await model.updateOne(where, params)
    try {
        let todoList = await model.find(where2)
        ctx.body = {
            data: todoList
        }
    } catch (err) {
        ctx.body = {
            code: 400,
            meg: "修改异常"
        }
        console.error(err);
    }
}

const updateName = async (model, where, params, ctx) => {
    await model.updateOne(where, params)
    try {
        let currentTodo = await model.find(where)
        ctx.body = {
            data: currentTodo
        }
    } catch (err) {
        ctx.body = {
            code: 400,
            meg: "修改异常"
        }
        console.error(err);
    }
}

const updateDetail= async (model, where, params, ctx) => {
    await model.updateOne(where, params)
    try {
        let currentTodo = await model.find(where)
        ctx.body = {
            data: currentTodo
        }
    } catch (err) {
        ctx.body = {
            code: 400,
            meg: "修改异常"
        }
        console.error(err);
    }
}

const del = async (model, where,where2, ctx) => {
    await model.findOneAndDelete(where)
    try {
        let todoList = await model.find(where2)
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

const findUserTodos = (model, where, ctx) => (
    model.find(where)
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

const findCurrentTodo = (model, where, ctx) => (
    model.find(where)
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
    findUserTodos,
    findCurrentTodo,
    updateName,
    updateDetail,
    addDate
}