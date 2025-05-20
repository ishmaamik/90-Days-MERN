import express from "express"
import dotenv from "dotenv"
import ProductRoutes from "./routes/ProductRoutes.js"
import { mongodb } from "./middlewares/mongodb.js"
import cors from "cors"
dotenv.config()

const app = express()

app.use(express.json())

/*Cors configurations must before any routes configured */

/* app.use(cors(
    {origin:[``,``], allowedHeaders}   for more than origin use array of origins, cors takes an object of configurations
)) */

app.use(cors({
    origin:["http://localhost:5173"]
}))

/* When my client sends my server json requests or json info, express.json() helps 
the server understand json syntax
i.e. parsing incoming requests with json payload
*/

const PORT= process.env.PORT

app.listen(PORT, (req, res)=>{
    console.log(`Listening on PORT ${PORT}`)
})

app.get("/", (req, res)=>{
    res.send("Hi")
})

/* res.send() is a built in function of app.get() function */

app.use('/api/products', ProductRoutes)


mongodb()

/* For mongodb error: MongoNetworkError: 48380000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error
just configure ip address to be 0.0.0.0
*/