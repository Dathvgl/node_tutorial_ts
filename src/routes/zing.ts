import express from "express";
import { ZingMp3 } from "zingmp3-api-full";

const router = express.Router();

router.get("/song/:id", async (req, res) => {
  const { id } = req.params;
  const data: unknown = await ZingMp3.getSong(id);
  res.json(data);
});

router.get("/detail-playlist/:id", (req, res) => {
  const { id } = req.params;

  ZingMp3.getDetailPlaylist(id).then((data) => {
    console.log(data);
  });

  res.send("Hello from ts app");
});

router.get("/home", async (req, res) => {
  const data: unknown = await ZingMp3.getHome();
  res.json(data);
});

router.get("/top100", async (req, res) => {
  const data: unknown = await ZingMp3.getTop100();
  res.json(data);
});

router.get("/chart-home", async (req, res) => {
  const data: unknown = await ZingMp3.getChartHome();
  res.json(data);
});

router.get("/new-release-chart", (req, res) => {
  ZingMp3.getNewReleaseChart().then((data) => {
    console.log(data);
  });

  res.send("Hello from ts app");
});

router.get("/info-song/:id", async (req, res) => {
  const { id } = req.params;
  const data: unknown = await ZingMp3.getInfoSong(id);
  res.json(data);
});

router.get("/artist/:id", (req, res) => {
  const { id } = req.params;

  ZingMp3.getArtist("sontungmtp").then((data) => {
    console.log(data);
  });

  res.send("Hello from ts app");
});

router.get("/list-artist-song/:id", (req, res) => {
  const { id } = req.params;

  ZingMp3.getListArtistSong("IWZ9ZD8A", "1", "15").then((data) => {
    console.log(data);
  });

  res.send("Hello from ts app");
});

router.get("/lyris/:id", (req, res) => {
  const { id } = req.params;

  ZingMp3.getLyric("ZOACFBBU").then((data) => {
    console.log(data);
  });

  res.send("Hello from ts app");
});

router.get("/search/:name", async (req, res) => {
  const { name } = req.params;

  const data: unknown = await ZingMp3.search(name);
  res.json(data);
});

router.get("/list-mv/:id", (req, res) => {
  const { id } = req.params;

  ZingMp3.getListMV("IWZ9Z08I", "1", "15").then((data) => {
    console.log(data);
  });

  res.send("Hello from ts app");
});

router.get("/category-mv/:id", (req, res) => {
  const { id } = req.params;

  ZingMp3.getCategoryMV("IWZ9Z08I").then((data) => {
    console.log(data);
  });

  res.send("Hello from ts app");
});

router.get("/video/:id", (req, res) => {
  const { id } = req.params;

  ZingMp3.getVideo("ZWEW9WI8").then((data) => {
    console.log(data);
  });

  res.send("Hello from ts app");
});

export default router;
