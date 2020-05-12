<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ArticleCategory extends Model
{
    protected $table = "article_categories";

    protected $primaryKey = 'id';

    protected $fillable = [ 'name', 'article_id' ];

    public function articles()
    {
        return $this->hasMany('App\Article');
    }
}
