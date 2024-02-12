import express from 'express';
import bodyParser from 'body-parser'
import crudRoutes from "./src/routes/cars.route.js"
import connectMongo from './src/config/conection.js';
import cors from 'cors'
connectMongo()
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use('/cars',crudRoutes);

/* Error handler middleware */
app.use((err, req, res, next) => { 
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

export default app;