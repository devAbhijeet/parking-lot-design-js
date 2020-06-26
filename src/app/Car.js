import Vehicle from "./base/Vehicle";

class Car extends Vehicle {
  constructor(registrationNo, spotsNeeded, size, color) {
    super();
    this.registrationNo = registrationNo;
    this.spotsNeeded = spotsNeeded;
    this.size = size;
    this.color = color;
  }

  clearSpot(parkingLot) {
    parkingLot.clearSpot(this);
  }

  canFit(parkingLot) {
    parkingLot.canFit(this);
  }

  park(parkingLot) {
    parkingLot.park(this);
  }
}

export default Car;
