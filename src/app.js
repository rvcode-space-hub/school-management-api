import express from 'express';
import cors from 'cors';
import router from './routers/school.router.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,resp)=>{
    resp.send("Welcome to School management api is node.js ");

})

app.use("/api", router)

export default app;