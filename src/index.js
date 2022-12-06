"use strict";
const express = require('express');
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    let helloSANYA = 'Hello SANYA!';
    res.send(helloSANYA);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
