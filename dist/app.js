"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const web_1 = __importDefault(require("./routers/web"));
require("dotenv/config");
const viewEngine_1 = require("./config/viewEngine");
const bodyRequest_1 = require("./config/bodyRequest");
const staticFile_1 = require("./config/staticFile");
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
//config ViewEngine, BodyRequest, StaticFile
(0, viewEngine_1.configViewEngine)(app);
(0, bodyRequest_1.configBodyRequest)(app);
(0, staticFile_1.configStaticFile)(app, 'public');
//config route
(0, web_1.default)(app);
//config Database Connection
(0, database_1.default)();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=app.js.map