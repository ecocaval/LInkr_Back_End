//* Libraries
import express from "express"
import cors from "cors"
import authRouter from "./routes/AuthRoutes.js"

const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())
app.use([authRouter])

app.listen(PORT, () => {
    console.log('listening to port ' + PORT)
})