<?php
namespace classes;
class Negyzet extends Sikidom {

    public $kerulet = 0;
    public $terulet = 0;
    
    public function __construct() {
        parent::__construct();

        // Módosítja az örökölt statikus 'megnevezes' tulajdonságot
        parent::$megnevezes = "Négyzet";
        }
    
    // Beállítja az oldal hosszát, és kiszámítja a kerületet és területet
    public function setOldal($oldalHossz) {
        $this->kerulet = $oldalHossz*4;
        $this->terulet = $oldalHossz**2;
    }
}
