class Vehicle {
  registrationNo = "";
  spotsNeeded = "";
  size = "";
  color = "";

  parkVehicle(parkingLot) {
    parkingLot.park(this);
  }

  getSpotsNeeded() {
    return this.spotsNeeded;
  }

  getRegistrationNo() {
    return this.registrationNo;
  }

  getSize() {
    return this.size;
  }

  getColor() {
    return this.color;
  }

  clearSpot(parkingLot) {}

  canFit(parkingLot) {}

  park(parkingLot) {}
}

export default Vehicle;
