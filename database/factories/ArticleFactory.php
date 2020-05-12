<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Article;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(Article::class, function (Faker $faker) {
    return [
        'title' => 'Evento '. $faker->name,
        'content' => $faker->name,
        'address' => $faker->address,
        'address_latitude' => $faker->randomFloat(null, -34.57818577661468, -34.669121872312246),
        'address_longitude' => $faker->randomFloat(null, -58.528911641761404, -58.4011258213648),
        'loc_id' => '1',
        'prov_id' => '1',
        'phone' => $faker->phoneNumber,
        'hour' => date('H:i:s', rand(1,54000)),
        'days' => $faker->numberBetween(1,7),
        'daysText' => "Días",
        'date_begin' => $faker->dateTimeBetween('-1 months','now'),
        'date_ends' => $faker->dateTimeBetween('now','1 months'),
        'published_on' => $faker->dateTimeBetween('-1 months','now'),
        'published_at' => $faker->dateTimeBetween('now','1 months'),
        'age_from' => $faker->numberBetween(0,5),
        'age_to' => $faker->numberBetween(6,18),
        'price' => $faker->numberBetween(0,1500),
        'status' => 'A',
        'featured' =>  $faker->numberBetween(0,1),
        'order' => $faker->numberBetween(0,100),
        'category_id' => $faker->numberBetween(1,5),
    ];
});


// 'title', 'content', 'category_id', 'address', 'address_latitude', 'address_longitude', 'prov_id', 'loc_id', 
//         'phone', 'hour', 'age_from', 'age_to', 'price', 'status', 'featured', 'order', 'days', 'daysText', 'date_begins', 'date_ends'