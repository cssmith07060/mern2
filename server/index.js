import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes'

const app = express()

app.use(bodyParser.json({ limit: "32mb", extended: true }))

const CONNECTION_URL = 'mongodb+srv://cssmith07060:Rain1977!@cluster0.ziykq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000


app.use('/posts', postRoutes)

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log('server running on port:${PORT}')))
    
    .catch(err => console.log(err.message))