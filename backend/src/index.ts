import express from 'express';
import { createConnection, ConnectionPoolEvents } from "typeorm";
import errorHandler from './app/error-handler/common.error';
import router from './app/routes/route';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions))
app.use('/', router)
app.use(errorHandler);
app.listen(3000, () => {
    console.log('server is listen in 3000')
   createConnection()
     .then(() => {
       console.log("Connected to database");
     })
     .catch((error) => {
       console.log('sfsdf')
       console.log("Error connecting to database:", error);
     });
})