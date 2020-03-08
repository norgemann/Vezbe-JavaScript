var noge = ["zmija", "covek bez jedne noge", "covek", "covek sa stapom", "pas"];
var nasumicniIndex = Math.floor(Math.random() * noge.length);
var nasumicniElement = noge[nasumicniIndex];
var poruka = prompt("Koliko noga ima " + nasumicniElement + "?");
var odgovor =
  poruka == nasumicniIndex
    ? "Tacno!"
    : "Netacno, " + nasumicnaElement + " ima " + nasumicniIndex + " noge.";
alert(odgovor);
