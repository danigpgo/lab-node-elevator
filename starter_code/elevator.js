class Elevator {
  constructor(){
    this.interval = undefined;
    this.direction  = "none";
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }

  start() {
    this.stop();
    this.interval = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
   this.log();
 }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }

    log() {
      console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
    }
}

module.exports = Elevator;
