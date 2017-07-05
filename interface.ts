namespace VehicleNameSpace {

    export interface Car {

        model:string;
        engine:string;
        horsepower:number;
    }

    export function carDetails(car:Car) {

        console.log(`car Details are: Model of the car is ${car.model} Car engine is:${car.engine}
        car horsepower is:${car.horsepower}`)
    }
}



