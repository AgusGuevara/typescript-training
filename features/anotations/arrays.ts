const carMaker = ["ford", "toyota", "chevrolet"];
const dates = [new Date(), new Date(), new Date()];

const carsByMaker = [["f150"], ["corola"], ["camaro"]];

// Help with inference when extracting values
// const car = carMaker[0];
const myCar = carMaker.pop();

// Prevent incompatbile values
// carMaker.push(33);

// Help with 'map'
carMaker.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-1-5"];
