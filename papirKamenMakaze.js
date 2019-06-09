//**********PAPIR KAMEN MAKAZE*********************

var pobeda = false;
var igrac = prompt("Da li biras papir, kamen ili makaze?")
var io = igrac.charAt(0).toUpperCase();//igracev odabir
var komp = Math.random();
if(komp < 0.34) komp = "papir";
else if(komp < 0.67) komp = "kamen";
else komp = "makaze";
var ko = komp.charAt(0).toUpperCase();//kompjuterov odabir
alert("Kompjuter: " + komp);
console.log(io==ko);

if(io==ko){pobeda = "nereseno";}
else if((io=='P'&& ko=='K')||(io=='K'&& ko=='M')||(io=='M'&& ko=='P'))pobeda = true; 
else;
switch (pobeda)
    {
    case false: alert("Izgubio si.");
            break;
    case true: alert("Pobedio si.");
            break;
        default: alert("Nereseno.");
    }