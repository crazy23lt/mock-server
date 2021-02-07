const Mock = require('mockjs');
module.exports = async (req, res) => {
    console.info(req.query)
    let code = Mock.mock({
        "number|100000-999999": 100
    });
    res.send({
        meta: "请求成功",
        data: {
            code: code.number
        },
        code: 200,
    })
}