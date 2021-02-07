const route = require("express").Router();
route.use((req, res, next) => {
    next();
});
route.get("/login", require("../api/getToken"));
route.get("/loginout", require("../api/loginOut"));
route.get("/getinfo", require("../api/getInfo"));
route.get("/doorkey", require("../api/doorKey"));
route.get("/getcode", require("../api/getAuthCode"));
module.exports = route;