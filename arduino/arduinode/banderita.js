var j = require("johnny-five");
var j = new j.Board();
var bombillo;
var motorcito;
var turno = 0;

circuito.on("ready", prender);

function prender() {
  var configuracion = {pin:"A0", freq: 50};
  celda = new j.Sensor(configuracion);

  bombillo = new j.Led(13);
  bombillo.on();

  motorcito = new j.Servo(9);
  motorcito.to(90);
  ondear();
}

function ondear() {
  console.log("Luz: " + celda.value);
  var luz = celda.value;
  if (luz > 800) {
    if(turno == 1) {
      turno = 0;
      motorcito.to(70);
    } else {
      turno = 1;
      motorcito.to(110);
    }
  } else {
    motorcito.to(150);
  }
  setTimeout(ondear, 1000);
}

