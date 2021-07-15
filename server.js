const express = require('express');
const app = express();
const path = require('path')
require("dotenv").config({ path: path.join(__dirname, ".env") })
const port = process.env.PORT || 3000;

app.use(express.static("public"))

app.get('/', (req, resp) => {
    resp.render("index.ejs")
})

app.listen(port, () => {
    console.log('listening on port', port)
})


