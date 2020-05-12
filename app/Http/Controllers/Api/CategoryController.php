<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\ArticleCategory;

use App\Traits\CrudTrait;

class CategoryController extends Controller
{
	use CrudTrait;

	public function getCategories()
	{
        return ArticleCategory::all()->pluck('name', 'id');
    }
}