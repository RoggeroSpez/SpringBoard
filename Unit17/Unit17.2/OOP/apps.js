let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."

class vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk (){
        return "Beep.";
    }
    toString(){
        return 'The vehical is a ${this.make} ${this.model} ${this.year}.';
    }
}

class Car extends Vehicle{
    constructor(make, year, model) {
        super(make, year, model);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, year, model) {
        super(make, year, model);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity){
        this.vehicle = [];
        this.capacity = capacity;
    }
}
    add(newVehical) {
        if (!(newVehical instanceof Vehicle)) {
            return "Only Vehicals allowed here!";
        }
        if (this.vehicle.length >= this.capacity) {
            return "Sorry we are full.";
        }
        this.vehical.push(newVehical);{
            return "Vehical added!";
        }
    }