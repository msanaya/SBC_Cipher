const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"))

app.get('/', (req, resp) => {
    resp.render("index.ejs")
})

app.listen(port, () => {
    console.log('listening on port', port)
})


