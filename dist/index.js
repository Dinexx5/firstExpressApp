"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
const products = [{ title: "tomato" }, { title: "orange" }];
const addresses = [{ id: 1, value: 'Fabriciusa 30' }, { id: 2, value: 'Kirova 1' }];
app.get('/addresses', (req, res) => {
    res.send(addresses);
});
app.get('/addresses/:id', (req, res) => {
    let address = addresses.find(p => p.id === +req.params.id);
    if (!address) {
        res.send(404);
    }
    else {
        res.send(address);
    }
});
app.get('/products', (req, res) => {
    res.send(products);
});
app.get('/products/:productTitle', (req, res) => {
    let product = products.find(p => p.title === req.params.productTitle);
    if (!product) {
        res.send(404);
    }
    else {
        res.send(product);
    }
});
// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
