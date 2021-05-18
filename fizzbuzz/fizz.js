var numeros = 100;

for(var i=1; i<=numeros; i++){
  if(i % 3 == 0){
    document.write("Fizz");
  }
  if(i % 5 == 0){
    document.write("Buzz");
  }
  if(!divisible){
    document.write(i)
  }
  document.write("<br />");
}

function esDivisible(num, divisor){
  if(num%divisor == 0) return true;
  else return false;
}