class ParkingLot {
  parkingSpace = [];
  maxLimit = 10;

  spaceReducer() {
    return this.parkingSpace.reduce(function(acc, entry) {
      return entry.spotsNeeded + acc;
    }, 0);
  }

  isSpaceAvailable() {
    return this.spaceReducer() < this.maxLimit;
  }

  canFit(vehicle) {
    return this.spaceReducer() + vehicle.spotsNeeded <= this.maxLimit;
  }

  clearSpot(vehicle) {
    this.parkingSpace = this.parkingSpace.filter(function(entry, index) {
      return entry.registrationNo !== vehicle.registrationNo;
    });
    console.log("***********");
    console.log("Vehicle Cleared ", vehicle);
    console.log("***********");
  }

  park(vehicle) {
    this.parkingSpace.push(vehicle);
    console.log("***********");
    console.log("Vehicle Parked ", vehicle);
    console.log("***********");
  }

  getVehicleByColor(color) {
    return this.parkingSpace.filter(function(entry, index) {
      return entry.color === color;
    });
  }

  getParkingSlot(registrationNo) {
    const vehicle = this.parkingSpace.filter(function(entry, index) {
      return entry.registrationNo === registrationNo;
    });
    return vehicle.spotsNeeded;
  }

  getAvaliableSlots() {
    return this.maxLimit - this.spaceReducer();
  }
}

export default ParkingLot;
