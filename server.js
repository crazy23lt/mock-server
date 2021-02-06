const express = require('express');
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));
require("./route")(app);
app.listen(3000, () => {
    console.info("/*-----MockApiServerStart-----*/");
});