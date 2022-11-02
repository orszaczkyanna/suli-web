<?php

// A 'declare()' használható bizonyos konstansok létrehozására
// Ez az egyetlen utasítás, ami az osztálydefiníció előtt szerepelhet
//declare ()

// A 'classes' névtérbe helyezi az osztályt, így elkerülhető az azonos nevű osztályok ütközése
namespace classes;

class Allat {
    // Publikus tulajdonság - a példányhoz tartozik
    public $nev = "ősosztály";

    // Statikus tulajdonság - az osztályhoz tartozik, nem az egyes példányokhoz
    // Már az osztály példányosításakor létrejön, a példányosítás pillanatától használható
    public static $hang = "néma";

    // Magic metódus: dupla aláhúzással kezdődik, felülírja az alapértelmezett metódust
    // itt opcionálisan paramétert is kaphatna a név beállításához:
    //public function __construct($param) {
    //    $this->nev = $param; // $this kötelező
    //}

    // Konstruktor - üresen hagyva, de megadása kötelező, ha a gyermekosztály meghívja
    public function __construct() { }

    public function hangotAd() {
        // Statikus tulajdonságot a '$this::$' szintaxissal lehet elérni, a $this->hang nem használható
        return $this::$hang;
    }
}
