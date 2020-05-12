<?php

use Illuminate\Database\Seeder;
use App\ArticleCategory;

class ArticleCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('article_categories')->truncate();
        
        $categories = [ 
            'Animales y mascotas','Arte callejero','Bares y restaurantes con actividades infantiles','Calesitas','Cine','Comida saludable','Deportes','Ferias (libros, discos, artes)','Juegotecas','Museos y galerías de arte','Música','Payasos y clowns','Peloteros y juegos para los más pequeños','Plazas y parques','Servicios infantiles (disfraces, cotillón, tortas, etc)','Talleres','Teatro','Títeres','Con lluvia','Youtubers','Otras actividades',
        ];

        foreach ($categories as $category) {
            $item = new ArticleCategory();
            $item->name = $category;
            $item->save();
            $this->command->info('Categoría '.$item->name. ' agregada.');
        }
        
    }
}
