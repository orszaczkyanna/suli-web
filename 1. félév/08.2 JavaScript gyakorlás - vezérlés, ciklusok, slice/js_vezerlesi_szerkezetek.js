document.write("<strong>JavaScript</strong><br/><br/>");

// Egysoros komment

/*
Többsoros komment
*/

var text = 'My name is "John Doe" ';
console.log(text);

// Ternáris operátor (háromoperandusú)
var szam = 20;
var eredmeny = szam < 18 ? "Kisebb" : "Nagyobb vagy egyenlő";
document.write("Ternáris eredmény: " + eredmeny + "<br/><br/>");

// Alap if-else elágazás
var x = 12;

if (x < 7) {
  document.write(`${x}: kisebb, mint 7`);
} else if (x > 10) {
  document.write(`${x}: nagyobb, mint 10`);
} else {
  document.write(`${x}: 7 és 10 között van`);
}
document.write("<br/>");

// Napszak szerinti üdvözlés
var time = 8;
var greeting;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.write(greeting + "<br/><br/>");

// Switch-case szerkezet

/*
switch (expression) {
  case n1:
    statements;
    break;
  case n2:
    statements;
    break;
  default:
    statements;
}
*/

var osztas1 = 6 / 3;
var osztas2 = 6 / 6;
var osztas3 = 6 / 9;

switch (osztas1) {
  case 2:
    document.write("Eredmény: 2.");
    break;
  case 1:
    document.write("Eredmény: 1.");
    break;
  default:
    document.write("Más eredmény.");
    break;
}
document.write("<br/>");

// For ciklus 1-től 5-ig
document.write("<br/>For ciklus:<br/>");
for (i = 1; i <= 5; i++) {
  document.write(i + "<br/>");
}

// While ciklus 1-től 10-ig
document.write("<br/>While ciklus:<br/>");
i = 1;
while (i <= 10) {
  document.write(i + "<br/>");
  i++;
}

// Do...while ciklus 11-től 20-ig
document.write("<br/>Do...while ciklus:<br/>");

i = 11;
do {
  document.write(i + "<br/>");
  i++;
} while (i <= 20);

// Szöveg hossza
var text = "Szia";
var hossz = text.length; // 4
document.write("<br/>Szöveg: " + text + "<br/>");
document.write("Szöveg hossza: " + hossz + "<br/>");

// Szöveges feladat: "csiga a kútban" probléma
document.write(
  "<br/>Csiga a kútban feladat: hány nap kell, hogy elérje a tetejét?<br/>"
);

var melyseg = 42;
var napok = 0;
var elert = 7 - 2;

while (elert < melyseg) {
  napok++;
  elert += 7 - 2;
}

document.write("Szükséges napok: " + napok + "<br/>");

// Tömbök – slice metódus
document.write("<br/><strong>Tömbök szeletelése (slice):</strong><br/>");

var szamok = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write("Eredeti tömb: " + szamok + "<br/>");

// 1-es indextől a 4-es indexig (az 5. index már nem lesz benne)
var reszlet1 = szamok.slice(1, 5); // [1, 2, 3, 4]
document.write("1-4 index közötti elemek: " + reszlet1 + "<br/>");

// 3-as indextől (4. elemtől) a végéig
var reszlet2 = szamok.slice(3); // [3, 4, 5, 6, 7, 8, 9]
document.write("3. indextől kezdve a végéig: " + reszlet2 + "<br/>");

// Utolsó 4 elem kivágása negatív indexeléssel
var reszlet3 = szamok.slice(-4); // [6, 7, 8, 9]
document.write("Utolsó 4 elem: " + reszlet3 + "<br/>");
