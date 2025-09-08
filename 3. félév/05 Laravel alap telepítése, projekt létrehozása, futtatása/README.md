# Laravel projekt létrehozása és futtatása

## 1. Composer telepítése

Composer letöltése és telepítése a [hivatalos oldalról](https://getcomposer.org/download/).

## 2. Új Laravel projekt létrehozása

```bash
composer create-project laravel/laravel app-name
```

- `laravel/laravel`: hivatalos Laravel sablon
- `app-name`: projekt mappaneve

```bash
cd app-name
```

## 3. PHP elérési út beállítása (ha szükséges)

- Windows kereső: `Környezeti változók`
- `Path` szerkesztése
- Új sor hozzáadása: a _php.exe_ mappája, pl.: `C:\xampp\php`

> PHP elérhető külön telepítőből (php.net), vagy fejlesztői környezetből (XAMPP, WAMP, Laragon).<br/>
> A lényeg, hogy a `php` parancs fusson a terminálban.

## 4. Szerver indítása

Projekt mappában:

```bash
php artisan serve
```

Kimenet sikeres indításnál:

```
Server running on [http://127.0.0.1:8000].
```

## 5. Futtatás böngészőben

[http://127.0.0.1:8000](http://127.0.0.1:8000) megnyitása.
