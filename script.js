

function cToF(celcius)
{
  var cToFahr = (((celcius * 9 / 5) + 32).toFixed(2));
  console.log('The conversion of '+ celcius+'\xB0C is ' + cToFahr + '\xB0F.');
}

function fToC(fahrenheit)
{
  var fToCel =(((fahrenheit - 32) * 5 / 9).toFixed(2));
  console.log('The conversion of '+ fahrenheit+'\xB0F is ' + fToCel + '\xB0C.');
}
cToF(60);
fToC(90);
