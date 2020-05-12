<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\ArticleImage;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(ArticleImage::class, function (Faker $faker) {
    
    return [
        'name' => 'default.jpg',
		'thumb'	=> 'default.jpg'
        // 'name' => $faker->imageUrl($width = 640, $height = 480),
		// 'thumb'	=> $faker->imageUrl($width = 250, $height = 250),
    ];
});