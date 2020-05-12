<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Article;
use App\ArticleImage;
use App\ArticleCategory;

use App\Traits\CrudTrait;

class ArticleController extends Controller
{
	use CrudTrait;

	public function getArticles(Request $request)
	{	
	
		if($request->day)
			$days = $request->day;
		else
			$days = '1,2,3,4,5,6,7';

		$articles = Article::age($request->age)
			->where(function($query) use($days) {
				$daysArray = explode(',', $days);
				foreach($daysArray as $day) {
					$query->orWhere('days', 'like', "%$day%");
				};
			})
			->category($request->category)
			->with('images')
			->with('category')
			->order($request->orderBy, $request->order)
			->get();

		return $articles;

	}
}