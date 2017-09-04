
class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.int = 0;
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.int = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.int);
  }

  update() {
    if (this.requests[0] > this.floor){
      this.floorUp();
    }
    else if (this.requests[0] < this.floor){
      this.floorDown();
    }
    else if (this.requests[0] == this.floor){
        this._passengersEnter();
        this.requests = [];
    }
    if (!this.requests.length){
      this._passengersLeave();
    }
  }

  _passengersEnter() {
      this.passengers.push(this.waitingList[0]);
      this.waitingList.pop();
      console.log("PASSENGERS: " + this.passengers[0].name);
      this._passengersLeave();
  }

  _passengersLeave() {

    if (this.passengers[0].destinationFloor < this.floor){
      this.floorDown();
    }
    else if (this.passengers[0].destinationFloor > this.floor){
      this.floorUp();
    }
    else if (this.passengers[0].destinationFloor == this.floor){
      this.stop();
      this.passengers.pop();
      console.log ("HAS LLEGADO A TU DESTINO: " + this.floor);

      console.log("EL ASCENSOR SE HA PARADO EN EL PISO: "+ this.floor);
    }
  }

  floorUp() {
    this.direction = "up";
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
      this.log();
    } else {
      console.log("You're in the highest floor");
    }
  }

  floorDown() {
    this.direction = "down";
    if (this.floor > 0) {
      this.floor -= 1;
      this.log();
    } else {
      console.log("You're in the lowest floor");
    }
  }

  call(person) {

    this.waitingList.push(person);
    this.requests.push(person.originFloor);
    this.start();
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }

}

module.exports = Elevator;
