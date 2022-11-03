<!DOCTYPE html>
<html lang="hu">
    <head>
        <meta charset="UTF-8">
        <title>Osztályok és Névterek</title>
    </head>
    <body>
        <?php
            // Osztályfájlok betöltése
            include './classes/Sikidom.php';
            include './classes/Negyzet.php';
            
            // Példányosít egy négyzetet, beállítja az oldalát, majd kiszámolja a kerületét és területét
            $negyzet1 = new classes\Negyzet();
            $negyzet1->setOldal(5);
            $kerulet1 = $negyzet1->kerulet;
            $terulet1 = $negyzet1->terulet;
            
            echo "Az első négyzet kerülete $kerulet1, a területe $terulet1. <br>";
                        
            $negyzet2 = new classes\Negyzet();
            $negyzet2->setOldal(3.6);
            $kerulet2 = $negyzet2->kerulet;
            $terulet2 = $negyzet2->terulet;
            
            echo "A második négyzet kerülete $kerulet2, a területe $terulet2. <br>";

        ?>
    </body>
</html>
