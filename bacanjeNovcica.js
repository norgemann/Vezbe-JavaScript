var tekst = "";
var q = prompt("Bacite novcic. pismo/glava");
var pismo = 0;
var glava = 1;
var holder = q == "pismo" ? pismo : glava;
var novcic = Math.floor(Math.random() * 2);
if (holder == novcic) tekst = "Tacno!";
else tekst = "Netacno!";
alert(tekst);
if (novcic == 1) alert("Bacena je glava.");
else if (novcic == 0) alert("Baceno je pismo");
