import express, {Request, Response} from 'express'
const app = express()
const port = 3001

const products = [{title: "tomato"}, {title: "orange"}];
const addresses = [{id: 1, value:'Fabriciusa 30'}, {id: 2, value: 'Kirova 1'}]
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

// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})