function teszt() {
  //Változók
  let szam = 10;
  var szam2 = 10;
  const szam3 = 10;

  /*
    Változók létrehozása
    var:
        ez volt az első
        ez adja a legnagyobb kompatibilitást
        5-6 éves böngészőprogram is ismeri
        viszont nem érdemes használni, mivel problémákat okozhat

    let:
        ezt használjuk
        ez hasonlít legjobban más programozási nyelvek változó kezelésére

    const:
        konstans
        ha a változót nem akarjuk módosítani, vagy újradefiniálni
        egy konstans referenciát hoz létre egy értékre

        változónál az az érték marad, amit beírok
        itt szam3 10 marad

        tömbnél az elemek módosíthatóak, de a tömb nem újradefiniálható

        *újradeklarálni így sem úgy sem lehet (kivéve varnál...)
        az az 
        let a = "valami";
        let a = "más";
        Ez nem jó
    */

  //Tömbök
  let tombX;
  const tomb = ["elem1", "elem2", "elem3"];

  const tomb2 = [];
  tomb2[0] = "elem1";
  tomb2[1] = "elem2";
  tomb2[2] = "elem3";

  const tomb3 = [];
  tomb3.push("elem1"); //A tömb végére tesz egy elemet - amit megadtam
  tomb3.push("elem2");
  tomb3.push("elem3");

  let hossz = tomb.length; //Megadja az elemszámot

  /*
    Tömbök létrehozása
    const:
        ezzel szokás, 
        ha fixen egy funkcióra hozzuk, és azt akarjuk, hogy az is maradjon
        így biztos, hogy nem definiálod/írod felül véletlenül

        //ez hibát dob, mert "const" (lettel lehet ilyet):
            const tombV = ["elem1","elem2","elem3"];
            tombV = ["fdgsdf","sfdgsdf","sfgsdfg"]
            tombV = tomb2;  
            
            
    .push
        A tömb végére tesz egy elemet - amit megadtam
        Hogy ne csináljak véletlenül lyukat a tömbben,
        vagy bármilyen kavart az index-számokkal

    Tömbök: speciális
    objekt tulajdonságaik vannak


    */

  //Adattípusok
  console.log(10 + "Alma");
  //10Alma
  //karakterként összefűzi
  console.log("10" * "10");
  //100
  //elvégzi a műveletet, vissza alakítja számmá
  console.log("Alma" + 10 + 4);
  //Alma104
  //Először stringet talált, szóval a többit is annak veszi
  console.log(10 + 4 + "Alma");
  //14Alma
  //Először összeadja, aztán hozzáfűzi
  console.log(1 + "11");
  //111
  //string, nincs művelet

  hossz = undefined;
  //Ezzel a változót teljesen kiürítem
  //nem ugyanaz, mint a null

  /* 
    A háttérben ilyen típusok vannak: 
    Number
        egész számok és törtek
        64 bites lebegő pontos ábrázolással tárol floatként
    String
    Boolean
    */

  //Ciklusok
  if (hossz == 10) {
    console.log("Valami");
  }
  /*
    Automatikus konverzió miatt, néha olyankor is egyenlőséget ad meg, mikor nem kéne, pl. 10 = "10" string number konverzió. Máshol hibaüzenetet adna
     === strict comparison: a típusuk is ugyanaz legyen
    A switch case automatikusan a ===-jellel dolgozik
    (1-es, 0-át is felfogja true-nak, false-nak)
    */

  let szam4 = parseInt("1");
  //típus konverzió

  /*JS kb. minden platformon fut
    (windows, linux, mac, android)
    ezért a "legnépszerűbb" nyelv
    */
}

function szamol(szam1, szam2) {}
szamol();

/*
Engedi meghívni hiányos argumentum listával a függvényeket
undefined-ként megadja

ezért alapértelemzett értéket rendelünk hozzá
*/

function szamol2(szam1 = 0, szam2 = 0) {
  return 1000;
}

szamol();
//Így már 0, nem undefined

//Debugolás böngészőben
/*
Breakpontok, ilyesmik
*/

//Ha nem indokolt ne tördeljük több sorba a kódot, mert kiegészítheti
let x = "Hello Word";

/*
let x2 = "Hello 
Word";
Ez nem jó

Mert itt magától beteszi a Hello után a pontosvesszőt.
El lehet hagyni, de nem jó gyakorlat
*/

let x2 =
  "Hello \
Word";

let eletero = 10;
//a letet érti hogy a vége

console.log(szamol());
//a returnnél viszont a return magában is lefut, szóval kiteszi a pontosvesszőt
