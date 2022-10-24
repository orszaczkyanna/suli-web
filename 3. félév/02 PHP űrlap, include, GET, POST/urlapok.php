<h1>Űrlap</h1>
<?php
// Ellenőrzi, hogy az űrlapot elküldték-e (POST kérésben jött-e adat)
// - FILTER_VALIDATE_BOOL: logikai értékké alakítja
// - FILTER_NULL_ON_FAILURE: ha nem sikerül logikai értékké alakítani, akkor NULL lesz az eredmény
if (filter_input(INPUT_POST,"VanAdat", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE)) {

    // Ha van feldolgozandó adat: dolgozzuk fel
    // Vezetéknév és keresztnév lekérése a POST-ból, megtisztítva
    $vezeteknev = filter_input(INPUT_POST, 'vezeteknev', FILTER_SANITIZE_STRING);
    $keresztnev = filter_input(INPUT_POST, 'keresztnev', FILTER_SANITIZE_STRING);

    // Kiírja az üdvözlő szöveget a megadott névvel
    // - Az "" idézőjelbe írt szövegben a változókat (pl. $vezeteknev) behelyettesíti az értékükkel
    // - Ha '' jelet használnánk, akkor a változók neve jelenne meg, nem az értékük
    echo "<h3>Üdvözlünk $vezeteknev $keresztnev!</h3>";

} else {
    // Ha nincs feldolgozandó adat, még nem küldték el az űrlapot: az űrlap jelenik meg
    ?>
    <!-- Űrlap tartalmát TILOS GET-tel küldeni -->
    <!-- action nélkül automatikusan saját magát hívja meg -->
    <form action="index.php?menuitem=urlap" method="POST">

        <label>Vezetéknév</label>
        <input type="text" name="vezeteknev">

        <label>keresztnév</label>
        <input type="text" name="keresztnev">

        <!-- POST kérést küldő gomb -->
        <!-- A gomb típusa szándékosan nem "submit", az máshogy működik -->
        <button name="VanAdat" value="true">Küldés</button>
    </form>
    <?php
}
// Segítségként (pl. hibakereséshez) itt is kiírhatnánk az egész $_POST tömböt:
// var_dump($_POST);
?>

<?php
