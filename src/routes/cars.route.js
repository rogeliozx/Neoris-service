import express from "express";
import carsController from "../controllers/cars.controller.js";
const crudRoutes = express.Router();

crudRoutes.get("/", carsController.getCar);
crudRoutes.post("/", carsController.registerCar);
crudRoutes.get('/:id', carsController.getCarById);
crudRoutes.put('/update',carsController.updateCar);

export default crudRoutes;