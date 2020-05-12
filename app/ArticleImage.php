<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ArticleImage extends Model
{
    protected $table = "article_images";

    protected $fillable = ['name', 'thumb', 'article_id'];

	public function article()
	{
	   	return $this->belongsTo('App\Article');
	}
}
