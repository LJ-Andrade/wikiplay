<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ArticlesTableSeeder::class);
        // $this->call(ArticleImagesTableSeeder::class);
        $this->call(ProvsTableSeeder::class);
        $this->call(ArticleCategoriesTableSeeder::class);
        $this->call(SettingsTableSeeder::class);
        //Last
        $this->call(LocsTableSeeder::class);
    }
}
