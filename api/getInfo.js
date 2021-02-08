const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = async (req, res) => {
    res.send({
        meta: "请求成功",
        data: {
            name: Mock.mock(() => Random.cname()), phone: 13636065890, auth: Mock.mock({
                "boolean|1": true
            }).boolean
        },
        code: 200,
    })
}