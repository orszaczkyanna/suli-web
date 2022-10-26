<!DOCTYPE html>
<html lang="hu">
    <head>
        <meta charset="UTF-8">
        <title>PHP alapok</title>
    </head>

    <body>
        <h1>PHP alapok</h1>

        <code>Példa kódkimenet</code>
        <br><br>

        <?php
        // Egyszerű kiírás
        echo "Hello PHP!<br><br>";

        // Változók deklarálása
        $a = 1;
        $b = 2;
        // A '+' jel matematikai összeadásra szolgál
        // Ha szükséges, a PHP automatikusan konvertálja a típusokat (pl. szöveg → szám)
        echo $a + $b;  // 3
        echo "<br><br>";

        // Vegyes típusú tömb
        $t = [1, 2, 3, 4.21, 5, 6, "szöveg", 'C', '3', true, "2022-10-26"];        
        // Megjegyzések:
        // - A 'C' itt string, mivel a PHP-ban nincs külön karakter (char) típus
        // - A "2022-10-26" is string, mivel a PHP nem kezel külön dátumtípust automatikusan


        // // Tömb elemének hozzárendelése tetszőleges indexhez
        // $t[1865] = "körte"; // A PHP ezt is elfogadja

        // Ciklus: tömb elemeinek kiírása indexekkel
        for ($i = 0; $i < count($t); $i++) {
            echo "<p>$i. = $t[$i]</p>";
        }

        // A teljes tömb kiírása olvasható formában ciklus nélkül
        // pre: preformatted - előformázott szöveg
        // print_r(): tömbök/objektumok gyors áttekintéséhez.
        echo "<pre>";
        print_r($t);
        echo "</pre><br>";

        // Részletes típus- és értékkiírás
        // var_dump(): típus + érték + hossz is
        echo "<pre>";
        var_dump($t); // a típust is kiírja
        echo "</pre><br>";

        // Asszociatív tömb: kulcs - érték párok
        $age = array("Peter" => "35", "Ben" => "37", "Joe" => "43");

        // Egy konkrét kulcshoz tartozó érték kiírása
        echo "Peter is " . $age['Peter'] . " years old.<br><br>";

        // Teljes asszociatív tömb kiírása típusinformációval
        echo "<pre>";
        var_dump($age);
        echo "</pre><br>";

        // Egyszerű foreach ciklus - csak az értékeket járja be
        foreach ($t as $value) {
            echo "$value<br>";
        }

        echo "<br><br>";

        // Foreach ciklus - kulcs és érték is elérhető
        foreach ($age as $key => $value) {
            echo "$key = $value<br>";
        }

        echo "<br><br>";

        // Elágazás példa
        if (false) {
            echo "<p>igaz</p>";
        } elseif (true) {
            echo "<p>elseif</p>";
        } else {
            echo "<p>hamis</p>";
        }
        ?>
    </body>
</html>
