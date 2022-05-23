//Kerekítés
function kerekit2Jegyre(szam) {
  return Math.round(szam * 100) / 100;
}

//Háromszög
function haromszogKeruletSzamol() {
  let oldal = document.getElementById("oldal-haromszog").value;
  let eredmeny = 3 * oldal;
  document.getElementById("ker-kiir").innerHTML = kerekit2Jegyre(eredmeny) + " cm";
}

function haromszogTeruletSzamol() {
  let oldal = document.getElementById("oldal-haromszog").value;
  let eredmeny = ((oldal * oldal) / 4) * Math.sqrt(3);
  document.getElementById("ter-kiir").innerHTML = kerekit2Jegyre(eredmeny) + " cm2";
}

//Kör
function korKeruletSzamol() {
  let sugar = document.getElementById("sugar").value;
  let eredmeny = 2 * Math.PI * sugar;
  document.getElementById("ker-kiir").innerHTML = kerekit2Jegyre(eredmeny) + " cm";
}

function korTeruletSzamol() {
  let sugar = document.getElementById("sugar").value;
  let eredmeny = Math.PI * sugar * sugar;
  document.getElementById("ter-kiir").innerHTML = kerekit2Jegyre(eredmeny) + " cm2";
}

//Téglalap
function teglalapKeruletSzamol() {
  let a = document.getElementById("oldal-a-teglalap").value;
  let b = document.getElementById("oldal-b-teglalap").value;
  a = parseFloat(a);
  b = parseFloat(b);
  let eredmeny = 2 * (a + b);
  document.getElementById("ker-kiir").innerHTML = kerekit2Jegyre(eredmeny) + " cm";
}

function teglalapTeruletSzamol() {
  let a = parseFloat(document.getElementById("oldal-a-teglalap").value);
  let b = parseFloat(document.getElementById("oldal-b-teglalap").value);
  let eredmeny = a * b;
  document.getElementById("ter-kiir").innerHTML = kerekit2Jegyre(eredmeny) + " cm2";
}

//Törlés
function torol() {
  document.getElementById("oldal-haromszog").value = null;
  document.getElementById("sugar").value = null;
  document.getElementById("oldal-a-teglalap").value = null;
  document.getElementById("oldal-b-teglalap").value = null;
  document.getElementById("ker-kiir").innerHTML = "";
  document.getElementById("ter-kiir").innerHTML = "";
}
