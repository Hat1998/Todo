import express, { Application } from 'express';
 
 import theRoutes from './routes/index';
const app:Application = express();


app.use(express.json())

app.use('/', theRoutes)



app.listen(8000, ( )=>{
    console.log("server is Listening ")
})