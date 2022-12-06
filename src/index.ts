import express, {Request, Response} from 'express'
const app = express()
const port = 3001

const products = [{title: "tomato"}, {title: "orange"}];
const addresses = [{value:'Fabriciusa 30'}, {value: 'Kirova 1'}]
app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})
app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})
app.get('/', (req: Request, res: Response) => {
    let helloMessage = "Privet"
    res.send(helloMessage)
})

// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})