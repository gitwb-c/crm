"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventBus = exports.server = exports.app = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const websocket_1 = require("../websocket/websocket");
const app = (0, express_1.default)();
exports.app = app;
const server = http_1.default.createServer(app);
exports.server = server;
(0, websocket_1.setUpWebSocket)(server);
const routes_1 = require("./routes");
const corsConfig_1 = require("../config/corsConfig");
const cookieParserConfig_1 = require("../config/cookieParserConfig");
const bodyParserConfig_1 = require("../config/bodyParserConfig");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const eventBus_1 = require("./eventBus");
Object.defineProperty(exports, "eventBus", { enumerable: true, get: function () { return eventBus_1.eventBus; } });
const rastreamento_1 = require("../plugins/rastreamento");
const auditoria_1 = require("../plugins/auditoria");
const viabilidade_1 = require("../plugins/viabilidade");
app.use(cookieParserConfig_1.cookieParserConfig);
app.use(corsConfig_1.corsConfig);
app.use(bodyParserConfig_1.bodyParserConfig);
const uploadPath = path_1.default.join(__dirname, "..", "uploads");
if (!fs_1.default.existsSync(uploadPath))
    fs_1.default.mkdirSync(uploadPath, { recursive: true });
app.use("/uploads", express_1.default.static(uploadPath));
(0, routes_1.loadRoutes)(app);
class Crm {
    constructor() {
        this.init = async () => {
            (0, auditoria_1.setupAuditoriaPlugin)();
            (0, rastreamento_1.setupRastreamentoPlugin)();
            (0, viabilidade_1.setupViabilidadePlugin)();
            // setupChatbotPlugin();
        };
    }
}
const crm = new Crm();
(async () => await crm.init())();
