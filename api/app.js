import express from 'express'
import cors from 'cors'
const app = express()

PORT = 3000

app.use(cors())

app.listen(PORT, () => {
    console.log("Starting server...")
    console.log(`HSR REST API will be running on port ${PORT}`)
})