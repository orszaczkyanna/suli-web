function uresE(a, b) {
  if (a.value.length == 0 || b.value.length == 0) {
    document.getElementById("eredmeny").innerHTML = "Írj be számokat!";
    document.getElementById("muvelet").innerHTML = "?";
    return false;
  } else {
    return true;
  }
}

function kerekitKettore(szam) {
  return Math.round(szam * 100) / 100;
}

function osszead() {
  if (uresE(document.getElementById("aSzam"), document.getElementById("bSzam"))) {
    let muvelet = document.getElementById("osszead").innerHTML;
    document.getElementById("muvelet").innerHTML = muvelet;
    let a = parseFloat(document.getElementById("aSzam").value);
    let b = parseFloat(document.getElementById("bSzam").value);
    let eredmeny = a + b;
    document.getElementById("eredmeny").innerHTML = kerekitKettore(eredmeny);
  }
}

function kivon() {
  if (uresE(document.getElementById("aSzam"), document.getElementById("bSzam"))) {
    let muvelet = document.getElementById("kivon").innerHTML;
    document.getElementById("muvelet").innerHTML = muvelet;
    let a = parseFloat(document.getElementById("aSzam").value);
    let b = parseFloat(document.getElementById("bSzam").value);
    let eredmeny = a - b;
    document.getElementById("eredmeny").innerHTML = kerekitKettore(eredmeny);
  }
}

function szoroz() {
  if (uresE(document.getElementById("aSzam"), document.getElementById("bSzam"))) {
    let muvelet = document.getElementById("szoroz").innerHTML;
    document.getElementById("muvelet").innerHTML = muvelet;
    let a = parseFloat(document.getElementById("aSzam").value);
    let b = parseFloat(document.getElementById("bSzam").value);
    let eredmeny = a * b;
    document.getElementById("eredmeny").innerHTML = kerekitKettore(eredmeny);
  }
}

function oszt() {
  if (uresE(document.getElementById("aSzam"), document.getElementById("bSzam"))) {
    let muvelet = document.getElementById("oszt").innerHTML;
    document.getElementById("muvelet").innerHTML = muvelet;
    let a = parseFloat(document.getElementById("aSzam").value);
    let b = parseFloat(document.getElementById("bSzam").value);
    if (b == 0) {
      window.alert("Nullával nem lehet osztani");
      document.getElementById("bSzam").value = null;
      document.getElementById("muvelet").innerHTML = "?";
    } else {
      let eredmeny = a / b;
      document.getElementById("eredmeny").innerHTML = kerekitKettore(eredmeny);
    }
  }
}

function torol() {
  document.getElementById("muvelet").innerHTML = "?";
  document.getElementById("eredmeny").innerHTML = "";
  document.getElementById("aSzam").value = null;
  document.getElementById("bSzam").value = null;
}
