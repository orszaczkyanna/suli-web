function sorozatKiir() {
  let ertek = parseInt(document.getElementById("kezdo").value);
  let leptet = parseInt(document.getElementById("leptet").value);
  let db = parseInt(document.getElementById("darab").value);
  let i;

  //Az eredmények elem tartalmának törlése
  document.getElementById("eredmeny").innerHTML = "";

  //Sorozat kiíratása
  for (i = 0; i < db; i++) {
    document.getElementById("eredmeny").innerHTML += "\n<p>" + ertek + "</p>";
    ertek += leptet;
  }
}
