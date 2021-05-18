var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);

function prender() {
  var led = new jf.Led(9);
  var rojito = new jf.Led(13);
  led.blink(500);
  rojito.blink(700);
}