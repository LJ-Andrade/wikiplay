<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Prov;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(Prov::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
    ];
});
