<?php

use Illuminate\Database\Seeder;
use App\Article;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */


    public function run()
    {
        $articlesAmmount = 10;
        
        // $name = $this->choice('What is your name?', ['Taylor', 'Dayle'], $articlesAmmount);

        // $articlesAmmount = $this->ask("Cuántos artículos deseás crear?");
        
        // if(is_int($articlesAmmount));
        //     $articlesAmmount = $this->ask('El número ingresado no es un entero. Cuántos artículos desea crear?');

        // if(!$this->command->confirm('Deseás eliminar los artículos existentes? (yes|no)', true))
        // {
        //     DB::table('articles')->truncate();
        // }

        factory(Article::class, $articlesAmmount)->create()->each(function ($article) {
            factory(Article::class)->make();
            //  Make images relations
            $article->images()->save(factory(App\ArticleImage::class)->make());
        });
    }
}
