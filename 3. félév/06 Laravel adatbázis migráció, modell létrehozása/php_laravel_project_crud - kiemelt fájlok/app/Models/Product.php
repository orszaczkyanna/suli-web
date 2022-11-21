<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// A Product modell az adatbázis 'products' táblájához kapcsolódik
class Product extends Model
{
    use HasFactory;

    // Csak ezek a mezők tölthetők fel tömegesen (create, update használatakor)
    protected $fillable = ['title', 'short_notes', 'price'];
}
