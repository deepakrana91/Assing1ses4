var VehicleNameSpace;
(function (VehicleNameSpace) {
    function carDetails(car) {
        console.log("car Details are: Model of the car is " + car.model + " Car engine is:" + car.engine + "\n        car horsepower is:" + car.horsepower);
    }
    VehicleNameSpace.carDetails = carDetails;
})(VehicleNameSpace || (VehicleNameSpace = {}));
/// <reference path="interface.ts" />
var myCar = { model: "Wagon R", engine: "K10B", horsepower: 1000 };
VehicleNameSpace.carDetails(myCar);
