function sorozatKiir() {
  let jelenlegi = 0;
  let elozo = 1;
  let kovetkezo;

  let db = parseInt(document.getElementById("darab").value);
  document.getElementById("eredmeny").innerHTML = "";

  for (let i = 0; i <= db; i++) {
    document.getElementById("eredmeny").innerHTML +=
      "\n<li>" + "A sorozat " + i + ". eleme: " + jelenlegi + "</li>";
    kovetkezo = jelenlegi + elozo;
    elozo = jelenlegi;
    jelenlegi = kovetkezo;
  }
}
