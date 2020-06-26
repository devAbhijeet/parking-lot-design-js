import ParkingLot from "./app/ParkingLot";
import Car from "./app/Car";
import Bus from "./app/Bus";
import { vehicleSizeEnum, vehicleSizeWeight } from "./app/utils/sizeEnum";

let bus = new Bus(
  "MH-03-AY76",
  vehicleSizeWeight[vehicleSizeEnum.VEHICLE_LARGE],
  vehicleSizeEnum.VEHICLE_LARGE,
  "red"
);
let car = new Car(
  "MH-03-BH73",
  vehicleSizeWeight[vehicleSizeEnum.VEHICLE_COMPACT],
  vehicleSizeEnum.VEHICLE_COMPACT,
  "blue"
);

let parkingLot = new ParkingLot();

console.log("***********");
console.log("Parking Slost Available ", parkingLot.getAvaliableSlots());
console.log("***********");

if (parkingLot.isSpaceAvailable() && parkingLot.canFit(bus)) {
  bus.park(parkingLot);
} else {
  console.log("***********");
  console.log("No slots availabe ", bus);
  console.log("***********");
}

console.log("***********");
console.log("Parking Slost Available ", parkingLot.getAvaliableSlots());
console.log("***********");

if (parkingLot.isSpaceAvailable() && parkingLot.canFit(car)) {
  car.park(parkingLot);
} else {
  console.log("***********");
  console.log("No slots availabe ", car);
  console.log("***********");
}

console.log("***********");
console.log("Parking Slost Available ", parkingLot.getAvaliableSlots());
console.log("***********");

bus.clearSpot(parkingLot);

console.log("***********");
console.log("Parking Slost Available ", parkingLot.getAvaliableSlots());
console.log("***********");
