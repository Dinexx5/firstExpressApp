import express, {Request, Response} from 'express'
import bodyParser from "body-parser";
const app = express()
const port = 3001

const products = [{id: 1, title: "tomato"}, {id: 2, title: "orange"}];
const addresses = [{id: 1, value:'Fabriciusa 30'}, {id: 2, value: 'Kirova 1'}]

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})

app.get('/addresses/:id', (req: Request, res: Response) => {
    let address = addresses.find(p => p.id === +req.params.id)
    if (!address) {
        res.send(404)
    } else {
        res.send(address)
    }
})
app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})

app.get('/products/:productTitle', (req: Request, res: Response) => {
    let product = products.find(p => p.title === req.params.productTitle)
    if (!product) {
        res.send(404)
    } else {
        res.send(product)
    }
})

app.get('/products/:id', (req: Request, res: Response) => {
    let product = products.find(p => p.id === +req.params.id)
    if (!product) {
        res.send(404)
    } else {
        res.send(product)
    }
})

app.post('/products', (req: Request, res: Response) => {

   const newProduct = {
       id: +(new Date()),
       title: req.body.title
   }
    products.push(newProduct)
    res.status(201).send(newProduct)
})

app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++)  {
        if (products[i].id === +req.params.id) {
            products.splice(i,1);
            res.send(204)
            return;
        }
    }
    res.send(404)
})

// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

