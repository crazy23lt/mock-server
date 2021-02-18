const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = async (req, res) => {
    var data = Mock.mock({
        "lists|10": [{
            "zone_name": "岁尾村",
            "calls|2": [{
                "call_name": "皇岗口岸派出所①",
                "call_tel": "0755-83391185"
            }],
        }]
    })
    res.send({
        meta: "请求成功",
        data: data,
        code: 200,
    })
}