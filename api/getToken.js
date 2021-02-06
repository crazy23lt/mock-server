const Mock = require('mockjs');
module.exports = async (req, res) => {
    var token = Mock.mock('@string(360)')
    res.send({
        meta: "请求成功",
        data: {
            token
        },
        code: 200,
    })
}