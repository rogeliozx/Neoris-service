import { carModel } from "../models/car.js";

export const carsController = {};
carsController.getCar = async (req, res, next) => {
  //heres its the model
  try {
    const listCars = await carModel.find({});
    return res.status(200).json({
      response: 200,
      listCars,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

carsController.registerCar = async (req, res, next) => {
  //model

  try {
    const newCar = await carModel.create({
      ...req.body,
    });

    return res.status(200).json({
      response: 200,
      newCar,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

carsController.getCarById = async (req, res, next) => {
  try {
    const car = await carModel.findById(req.params.id);
    console.log("resolve", car);
    return res.status(200).json({
      response: 200,
      car,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

carsController.updateCar = async (req, res, next) => {
  try {
    console.log(req.body);
    const car = await carModel.findOneAndUpdate(
      { _id: req.body._id },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json({
      response: 200,
      car,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

export default carsController;
