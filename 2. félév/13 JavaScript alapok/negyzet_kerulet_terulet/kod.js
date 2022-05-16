function keruletSzamol() {
  /*
    let oldal = 5;
    let ker = oldal * 4;
    document.getElementById("eredmeny").innerHTML = "A(z) " + oldal + " cm oldalú négyzet kerülete: " + ker + " cm.";
    */

  let oldal = document.getElementById("negyzetoldal").value;
  let ker = oldal * 4;
  document.getElementById("eredmeny").innerHTML =
    "A(z) " + oldal + " cm oldalú négyzet kerülete: " + ker + " cm.";
}

function teruletSzamol() {
  /*
    let oldal = 8;
    let ter = oldal * oldal;
    document.getElementById("eredmeny").innerHTML = "A(z) " + oldal + " cm oldalú négyzet területe: " + ter + " cm2.";
    */
  let oldal = document.getElementById("negyzetoldal").value;
  let ter = oldal * oldal;
  document.getElementById("eredmeny").innerHTML =
    "A(z) " + oldal + " cm oldalú négyzet területe: " + ter + " cm2.";
}

function torol() {
  document.getElementById("eredmeny").innerHTML = "";
  document.getElementById("negyzetoldal").value = null;
  //document.write("Az adatok törlése kész");
  //window.alert("Az adatok törlése kész");
  //alert("Az adatok törlése kész");
  console.log("Az adatok törlése kész");
}
