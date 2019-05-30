var noge = ["zmija", "covek bez jedne noge", "covek", "covek sa stapom", "pas"];
var nasumicniIndex = Math.floor(Math.random()*noge.length);
var nasumicnaElement = noge[nasumicniIndex];
var poruka = prompt("koliko noga ima "+ nasumicnaElement+"?");
var odgovor = (poruka == nasumicniIndex)? "Tacno!":"Netacno, " +nasumicnaElement+ " ima " + nasumicniIndex+ " noge.";
alert(odgovor);