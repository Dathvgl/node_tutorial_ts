"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zingmp3_api_full_1 = require("zingmp3-api-full");
const router = express_1.default.Router();
router.get("/song/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield zingmp3_api_full_1.ZingMp3.getSong(id);
    res.send(JSON.stringify(data));
}));
router.get("/detail-playlist/:id", (req, res) => {
    const { id } = req.params;
    zingmp3_api_full_1.ZingMp3.getDetailPlaylist(id).then((data) => {
        console.log(data);
    });
    res.send("Hello from ts app");
});
router.get("/home", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield zingmp3_api_full_1.ZingMp3.getHome();
    res.send(JSON.stringify(data));
}));
router.get("/top100", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield zingmp3_api_full_1.ZingMp3.getTop100();
    res.send(JSON.stringify(data));
}));
router.get("/chart-home", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield zingmp3_api_full_1.ZingMp3.getChartHome();
    res.send(JSON.stringify(data));
}));
router.get("/new-release-chart", (req, res) => {
    zingmp3_api_full_1.ZingMp3.getNewReleaseChart().then((data) => {
        console.log(data);
    });
    res.send("Hello from ts app");
});
router.get("/info-song/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield zingmp3_api_full_1.ZingMp3.getInfoSong(id);
    res.send(JSON.stringify(data));
}));
router.get("/artist/:id", (req, res) => {
    const { id } = req.params;
    zingmp3_api_full_1.ZingMp3.getArtist("sontungmtp").then((data) => {
        console.log(data);
    });
    res.send("Hello from ts app");
});
router.get("/list-artist-song/:id", (req, res) => {
    const { id } = req.params;
    zingmp3_api_full_1.ZingMp3.getListArtistSong("IWZ9ZD8A", "1", "15").then((data) => {
        console.log(data);
    });
    res.send("Hello from ts app");
});
router.get("/lyris/:id", (req, res) => {
    const { id } = req.params;
    zingmp3_api_full_1.ZingMp3.getLyric("ZOACFBBU").then((data) => {
        console.log(data);
    });
    res.send("Hello from ts app");
});
router.get("/search/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    const data = yield zingmp3_api_full_1.ZingMp3.search(name);
    res.send(JSON.stringify(data));
}));
router.get("/list-mv/:id", (req, res) => {
    const { id } = req.params;
    zingmp3_api_full_1.ZingMp3.getListMV("IWZ9Z08I", "1", "15").then((data) => {
        console.log(data);
    });
    res.send("Hello from ts app");
});
router.get("/category-mv/:id", (req, res) => {
    const { id } = req.params;
    zingmp3_api_full_1.ZingMp3.getCategoryMV("IWZ9Z08I").then((data) => {
        console.log(data);
    });
    res.send("Hello from ts app");
});
router.get("/video/:id", (req, res) => {
    const { id } = req.params;
    zingmp3_api_full_1.ZingMp3.getVideo("ZWEW9WI8").then((data) => {
        console.log(data);
    });
    res.send("Hello from ts app");
});
exports.default = router;
