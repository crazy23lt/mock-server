const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = async (req, res) => {
    var data = Mock.mock({
        "lists|10": [{
            "online|1": true,
            "arae": () => Random.word(),
            "name": () => Random.cname(),
            "unit|1": ["1栋", "2栋", "3栋"]
        }]
    })
    res.send({
        meta: "请求成功",
        data: {
            lists: data.lists
        },
        code: 200,
    })
}