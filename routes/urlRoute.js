const {Router} = require("express")
const { getUrl, createUrl, getUrls } = require("../controllers/urlController");

exports.urlRouter = Router().get("/urls", getUrls).get("/url", getUrl).post("/urls", createUrl);
