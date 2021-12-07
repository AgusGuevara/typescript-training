// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
//   summary(): string;
// }

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name : ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has : ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);

// interfaces are best used to describe very different and implicit types in an object-
// interfaces are used as "gatekeepers", basically checkers for functions

// object a and object b must satisfy interfeace x properties to be that interface type!
