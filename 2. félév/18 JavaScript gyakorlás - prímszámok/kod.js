function primSzamol() {
  let db = parseInt(document.getElementById("darab").value);
  let i, j, osztok;
  const szamok = [];

  for (i = 1; i < db; i++) {
    osztok = 0;

    for (j = 1; j <= i; j++) {
      if (i % j === 0) {
        osztok++;
      }
    }

    if (osztok === 2) {
      szamok.push(i);
      console.log(i);
    }
  }

  kiirat(szamok);
}

function kiirat(adatok = []) {
  let eredmenyElem = document.getElementById("eredmeny");
  let kiirando = "\n<table>";
  let i;

  //A táblázat kiürítése
  eredmenyElem.innerHTML = "";

  //Adatok kiíratása
  for (i = 0; i < adatok.length; i++) {
    if ((i + 1) % 2 === 1) {
      kiirando += "\n\t<tr>\n\t\t<td>" + adatok[i] + "</td>";
    } else if ((i + 1) % 2 === 0) {
      kiirando += "\n\t\t<td>" + adatok[i] + "</td>\n\t</tr>";
    }
  }

  //Hiányzó oszlop pótlása
  if (i % 2 != 0) {
    kiirando += "\n\t\t<td style='display: none;'></td>\n\t</tr>";
  }

  kiirando += "\n</table>";
  console.log(kiirando);
  eredmenyElem.innerHTML = kiirando;
}
