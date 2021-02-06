const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = async (req, res) => {
    var name = Mock.mock(() => Random.cname())
    res.send({
        meta: "请求成功",
        data: {
            name
        },
        code: 200,
    })
}