import { features } from "process";

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key : string]: any } [] ): object {

    const CarInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }

    return CarInfo;
};

let answare = storeCarInfo(`Bugatti`,`Chiron`, {color:`black`}, {features: [`Navigation`,`8.0-liter 16-cylinder powerplant`]})

console.log(answare);