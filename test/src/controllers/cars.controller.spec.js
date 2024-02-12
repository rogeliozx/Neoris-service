import carsController from "../../../src/controllers/cars.controller.js";
import { carModel } from "../../../src/models/car.js";
import { response } from "express";

jest.mock('mongoose');
const res = {};
res.json = jest.fn((res)=>res);
res.status = jest.fn(() => res);

describe("Car controller", () => {
  it("Should return list cars", async () => {
    carModel.find = jest.fn().mockResolvedValue('test')
    const data = await carsController.getCar({}, res);
    expect(data.listCars).toBe('test')
    expect(data.response).toBe(200)
  });
it("Should throw error",async ()=>{
    
    carModel.find = jest.fn().mockRejectedValueOnce({message:'Failed'})
    carModel.prototype.find = jest.fn();
    const data = await carsController.getCar({}, res);
    expect(data.error).toBe('Failed')
})

it("Should create new car",async ()=>{
    carModel.create = jest.fn().mockResolvedValue('test')
    const data = await carsController.registerCar({params:{id:'test'},body:{}}, res);
    expect(data.newCar).toBe('test')
    expect(data.response).toBe(200)
})

it("Should return 400 ",async ()=>{
    carModel.create = jest.fn().mockResolvedValue('test')
    const data = await carsController.registerCar({params:{},body:{}}, res);
    expect(data.response).toBe(400)
})

it("Should create new car throw error",async ()=>{
    carModel.create = jest.fn().mockRejectedValueOnce({message:'Failed'});
    const data = await carsController.registerCar({params:{id:'fail'},body:{}}, res);
    expect(data.error).toBe('Failed')
})

it("Should get car by id",async ()=>{
    carModel.findById = jest.fn().mockResolvedValue('test')
    const data = await carsController.getCarById({params:{id:'test'}}, res);
    console.log(data)
    expect(data.car).toBe('test')
    expect(data.response).toBe(200)
})

it("Should get car by id throw error",async ()=>{
    carModel.findById = jest.fn().mockRejectedValueOnce({message:'Failed'});
    const data = await carsController.getCarById({params:{id:'test'}}, res);
    expect(data.error).toBe('Failed')
})

it("Should update car",async ()=>{
    carModel.findOneAndUpdate = jest.fn().mockResolvedValue('test')
    const data = await carsController.updateCar({body:{_id:'test'}}, res);
    expect(data.car).toBe('test')
    expect(data.response).toBe(200)
})

it("Should get car by id throw error",async ()=>{
    carModel.findOneAndUpdate = jest.fn().mockRejectedValueOnce({message:'Failed'});
    const data = await carsController.updateCar({body:{_id:'test'}}, res);
    expect(data.error).toBe('Failed')
})

});
