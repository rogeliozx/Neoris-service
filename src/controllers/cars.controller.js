import logger from "../config/logger.js";
import { carModel } from "../models/car.js";

export const carsController = {};
carsController.getCar = async (req, res, next) => {
  //heres its the model
  try {
    const listCars = await carModel.find({});
    logger.info('Send list Cars')
    return res.status(200).json({
      response: 200,
      listCars,
    });
  } catch (error) {
    logger.error('error send list cars', error.message)
    return res.status(400).json({
      error: error.message,
    });
  }
};

carsController.registerCar = async (req, res, next) => {
  //model

  try {
    console.log(!req.params.id)
   if(!req.params.id){
    logger.warn('Bad request of params')
   return res.status(400).json({
      response:400,
    })
   } 
    const newCar = await carModel.create({
      ...req.body,
    });
    logger.info('Create new Car')
    return res.status(200).json({
      response: 200,
      newCar,
    });
  } catch (error) {
    logger.warn('err Create new Car',error.message)
    return res.status(400).json({
      error: error.message,
    });
  }
};

carsController.getCarById = async (req, res, next) => {
  try {
    const car = await carModel.findById(req.params.id);
   logger.info('Car by Id send')
    return res.status(200).json({
      response: 200,
      car,
    });
  } catch (error) {
    logger.error('Erro get car by id',error)
    return res.status(400).json({
      error: error.message,
    });
  }
};

carsController.updateCar = async (req, res, next) => {
  try {
    const car = await carModel.findOneAndUpdate(
      { _id: req.body._id },
      { ...req.body },
      { new: true }
    );
    logger.info('updated car')
    return res.status(200).json({
      response: 200,
      car,
    });
  } catch (error) {
    logger.error('error updated car',error.message)
    return res.status(400).json({
      error: error.message,
    });
  }
};

export default carsController;
