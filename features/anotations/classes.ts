class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log("chu chu");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private honk(): void {
    console.log("wupwup");
  }

  startHonkProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "blue");
car.startHonkProcess();
