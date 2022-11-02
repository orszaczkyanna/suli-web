<?php
namespace classes;

// A 'Kutya' az 'Allat' osztályból származik
class Kutya extends Allat {

    // Konstruktor - az ősosztály konstruktorát is meghívja
    public function __construct() {
        parent::__construct();

        // Beállítja az örökölt statikus 'hang' tulajdonságot
        parent::$hang = "vau..vau";

        // Aktuális névtér megjelenítése
        //echo 'Névtér: ' . __NAMESPACE__;
    }
}
