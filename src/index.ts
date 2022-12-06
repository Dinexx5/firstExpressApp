import express, {Request, Response} from 'express'
const app = express()
const port = 3001

app.get('/', (req: Request, res: Response) => {
    let helloSANYA = 'Hello SANYA ti krasava brat otvechau voobche!';
    res.send(helloSANYA)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})