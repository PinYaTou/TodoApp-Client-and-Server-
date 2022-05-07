const findUserTypes = (model, where, ctx) => (
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

const updateCurrentType = async(model,where,params,ctx) => {
    await model.updateOne(where, params)
    try {
        let currentType = await model.find(where)
        ctx.body = {
            data: currentType
        }
    } catch (err) {
        ctx.body = {
            code: 400,
            meg: "修改异常"
        }
        console.error(err);
    }
}

module.exports = {
    findUserTypes,
    updateCurrentType
}