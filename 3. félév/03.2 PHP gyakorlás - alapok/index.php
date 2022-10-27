<!DOCTYPE html>
<html lang="hu">
    <head>
        <meta charset="UTF-8">
        <title>PHP alapok gyakorlása</title>
    </head>
    <body>
        <h1>PHP alapok gyakorlása</h1>

        <?php
        // Számtömb létrehozása
        $szamTomb = array(1, 2, 3);

        // Szövegtömb
        $szovegTomb = array("első", "második");

        // Vegyes típusú tömb
        $vegyesTomb = array('A', "második", 5, true);

        // Tömb kiírása foreach ciklussal (csak az értékek)
        foreach ($vegyesTomb as $elem) {
            echo "$elem<br>";
        }

        echo "<br><br>";


        // Szövegváltozó létrehozása
        $szoveg = "Ez egy minta szöveg";

        // Idézőjelek viselkedése: ' nem értelmezi a változót, " igen
        echo '$szoveg és $szoveg<br>';  // szövegként jelenik meg
        echo "$szoveg és $szoveg<br><br>";  // változó értékét írja ki

        // Null coalescing példa (??= csak PHP 7.4+)        
        $nev = "Andi";

        // Ha a változó nem létezik vagy null, akkor kapja meg a megadott értéket
        $nev ??= "ismeretlen";

        echo "A név: $nev<br><br>";


        // isset() példa - ellenőrzi, hogy létezik-e a változó, és nem null
        $valtozo = null;

        $letezik = isset($valtozo) ? $valtozo : "még nincs érték";
        echo "A változó tartalma: $letezik<br><br>";


        // Logikai művelet: XOR (igaz, ha pontosan az egyik igaz)
        $igaz = true;
        $hamis = false;

        if ($igaz xor $hamis) {
            echo "XOR eredménye: igaz";
        } else {
            echo "XOR eredménye: hamis";
        }

        echo "<br><br>";


        // Tömb létrehozása vegyes értékekkel
        $adatok = [1, "szöveg", true];

        // A tömb kiírása típusok nélkül
        echo "<pre>";
        print_r($adatok);
        echo "</pre><br>";

        // A tömb részletes kiírása típusokkal
        echo "<pre>";       
        var_dump($adatok);
        echo "</pre><br>";

        // Asszociatív tömb: kulcs - érték párok
        $eletkor = array("Eva" => "20", "Adam" => "25");

        // Egy konkrét kulcs kiírása
        echo "Éva életkora: " . $eletkor["Eva"] . "<br><br>";

        // Másik asszociatív tömb példa
        $kedvencSzin = array("eva" => "Sárga", "adam" => "Zöld");

        echo "Éva kedvenc színe: " . $kedvencSzin["eva"] . "<br><br>";

        // Kulcs-érték párok kiírása foreach ciklussal
        foreach ($kedvencSzin as $kulcs => $ertek) {
            echo "<p>$kulcs kulcshoz tartozó érték: $ertek</p>";
        }
        ?>
    </body>
</html>
