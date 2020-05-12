<?php

use Illuminate\Database\Seeder;
use App\ArticleImage;

class ArticleImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('article_images')->truncate();

		factory(ArticleImage::class, 2)->create()->each(function ($articleImage) {
			factory(ArticleImage::class)->make();
		});
    }
}
