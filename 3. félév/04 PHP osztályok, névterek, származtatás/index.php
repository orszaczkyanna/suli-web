<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Osztályok és névterek</title>
</head>
<body>
    <h1>Osztályok és névterek</h1>

    <?php
    // PHP 8.x verzió

    //namespace classes;

    // A 'namespace' használata itt nem szükséges, mert ez a belépési pont (index.php),
    // nem tartalmaz osztályt vagy modult, amit névtérbe kellene sorolni
    
    // -- Az osztályfájlok betöltése
    
    // Az 'include' nem állít meg a hibánál, ha nem találja a fájlt, csak figyelmeztet
    //include './Allat.php';
    //include './Kutya.php';

    // A 'require' leállítja a futást hiba esetén, így biztonságosabb osztálybetöltéshez
    require './classes/Allat.php';
    require './classes/Kutya.php';

    // Példányosítja a 'Kutya' osztályt, amely a 'classes' névtérben található
    $bodri = new classes\Kutya();

    // Beállítja a 'nev' tulajdonságot
    $bodri->nev = "Bodri";

    // Kiírja a név és a hang kombinált értékét
    echo $bodri->nev . " hangja: " . $bodri->hangotAd();
    ?>
</body>
</html>
