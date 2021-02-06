module.exports = (app) => {
    app.all("*", function (req, res, next) {
        if (req.method !== "OPTIONS") {
            console.info(`method:${req.method}`);
            console.info(`originalUrl:${req.originalUrl.split("?")[0]}`);
            console.info(`/******************/`);

        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Content-Type", "application/json;charset=utf-8");
        res.header("Access-Control-Allow-Headers", "X-Requested-With, mytoken");
        res.header(
            "Access-Control-Allow-Headers",
            "X-Requested-With, Authorization"
        );
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
        );
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", " 3.2.1");
        if (req.method == "OPTIONS") res.sendStatus(200);
    /*让options请求快速返回*/ else next();
    });
    app.use('/ft', require("./ftApp.js"));
    app.use((req, res) => {
        res.json({ error: "api地址有问题", status: 202 });
    })
};