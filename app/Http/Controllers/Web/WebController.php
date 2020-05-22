<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Article;
use App\ArticleImage;
use App\ArticleCategory;

use App\Traits\CrudTrait;

use Carbon\Carbon;

class WebController extends Controller
{
	use CrudTrait;

    public function index()
    {
        return view('web.index');
    }

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
	
	public function getSpecialArticles() {

		$newestArticle = Article::orderBy('date_begin', 'DESC')->with('images')->with('loc')->first();

		// $now = Carbon::now();
		$from =  Carbon::now('America/Buenos_Aires');
		// dd($from);
		$to = 	$from->endOfWeek();
		// dd($from);
		$thisWeekArticle = Article::whereBetween('created_at', [Carbon::now('America/Buenos_Aires'), Carbon::now('America/Buenos_Aires')->endOfWeek()])
			->with('loc')
			->first();

		$freeArticles = Article::where('price', '0')
			->with('loc')
			->with('category')
			->with('images')
			->take(4)
			->get();

		$allFamilyArticles = Article::where('age_from', '>', '0')
			->with('loc')
			->with('category')
			->with('images')
			->take(3)
			->get();

		
		$featuredArticles = Article::where('featured', true)->where('id', '!=', $newestArticle->id)
			->with('loc')
			->with('images')
			->get();
		// dd($featuredArticles);
		return  [ 	
					'featuredArticles' => $featuredArticles, 
					'newestArticle' => $newestArticle, 
					'thisWeek' => $thisWeekArticle,
					'freeArticles' => $freeArticles,
					'allFamilyArticles' => $allFamilyArticles 
				];

	}	

    public function getCategories()
    {
        return ArticleCategory::all()->pluck('name', 'id');
    }
}