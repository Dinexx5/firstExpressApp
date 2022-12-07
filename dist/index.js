"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3001;
const products = [{ id: 1, title: "tomato" }, { id: 2, title: "orange" }];
const addresses = [{ id: 1, value: 'Fabriciusa 30' }, { id: 2, value: 'Kirova 1' }];
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
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
app.get('/products/:id', (req, res) => {
    let product = products.find(p => p.id === +req.params.id);
    if (!product) {
        res.send(404);
    }
    else {
        res.send(product);
    }
});
app.post('/products', (req, res) => {
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});
app.put('/products/:id', (req, res) => {
    let product = products.find(p => p.id === +req.params.id);
    if (!product) {
        res.send(404);
    }
    else {
        product.title = req.body.title;
        res.send(product);
    }
});
app.delete('/products/:id', (req, res) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
});
// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
