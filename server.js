import express from "express";
import { fetch } from "undici";

const app = express();

app.get("/v1/api/translate/", (req, res) => {
    const sl = req.query["source-lang"];
    const tl = req.query["target-lang"];
    const q = req.query["query"];
    if (sl === undefined || tl === undefined || q === undefined) {
        return res.status(400).json({
            "status": "error",
            "error": "Missing parameters"
        });
    }

    const url = new URL("https://translate.googleapis.com/translate_a/single");
    const query = new URLSearchParams({ 'client': 'gtx', "dt": "t", sl, tl, q });
    url.search = query.toString();

    fetch(url)
      .then(response => response.json())
      .then(json => {
        res.json({
            status: "ok",
            result: json[0][0][0],
            'source-lang': sl,
            'target-lang': tl
        });
      })
      .catch(err => {
        res.status(500).json({ status: "error", error: "Internal error" });
      });
});

const server = app.listen(443, () => {
});
