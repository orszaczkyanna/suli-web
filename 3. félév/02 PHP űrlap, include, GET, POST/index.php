<!DOCTYPE html>

<html lang="hu">
    <head>
        <meta charset="UTF-8">
        <title>Első PHP alkalmazás</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <nav>
            <!-- A menüpontok paraméterként adódnak át (GET kérésként) -->
            <!-- pl. 'menuitem' nevű változó átadása, melynek értéke 'lista' -->
            <ul>
                <li><a href="index.php?menuitem=lista" >Listák</a>
                <li><a href="index.php?menuitem=tablazat" >Táblázat</a>
                <li><a href="index.php?menuitem=urlap" >Űrlap</a>
            </ul>
        </nav>

        <h1>Első PHP alkalmazás</h1>

        <?php
            // Lekéri a menüpont nevét a böngészőből (GET kérés alapján)
            // - INPUT_GET jelzi, hogy a $_GET tömbből olvasson (az URL paramétereit használja)
            // - FILTER_SANITIZE_STRING kiszűri a veszélyes karaktereket (pl. HTML tag-eket), hogy ne okozzanak problémát (XSS elleni védelem)
            $menuItem = filter_input(INPUT_GET, 'menuitem', FILTER_SANITIZE_STRING);

            // Megjeleníti az oldalon a teljes $_GET tömb tartalmát (itt tanulási célból)
            var_dump($_GET);

            // Feltételes elágazás: a kiválasztott menüpont alapján eldönti, hogy melyik fájlt töltse be
            switch ($menuItem) {
                case "lista":
                    include './listak.php';
                    break;
                case "tablazat":
                    include './tablazat.php';
                    break;
                case "urlap":
                    // Az urlapok.php fájl tartalmát ideilleszti az index oldalra és lefuttatja
                    include './urlapok.php';
                    break;

                default:
                    // Alapértelmezett tartalom, ha nincs menüpont kiválasztva
                    echo '<h2>Üdvözlet!</h2>';
                    break;
            }

            // A kiválasztott menüpont értékének kiírása
            // Konkatenáló/összefűző jel: .
            echo 'választás értéke: '.$menuItem;
        ?>
    </body>
</html>
