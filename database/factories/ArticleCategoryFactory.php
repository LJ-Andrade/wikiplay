<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Faker\Generator as Faker;
use Illuminate\Support\Str;

use App\ArticleCategory;


$factory->define(ArticleCategory::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'article_id' => '1'
    ];
});
