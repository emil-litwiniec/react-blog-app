const express = require("express");
import expressStaticGzip from "express-static-gzip";
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use('/', expressStaticGzip(path.join(__dirname, "..",'/client/public'), {
    index: false,
    enableBrotli: true,
    customCompressions: [{
      encodingName: 'gzip',
      fileExtension: 'gz'
    }],
    orderPreference: ['br']
  }));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
    console.log("server is up");
});
