<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\ArticleImage;

Use File;
// use App\Traits\CrudTrait;


class ArticleImageController extends Controller
{

	// use CrudTrait;

	public function __construct()
    {
        $this->middleware('auth');
	}

	public function destroy($id) 
	{	
		try
		{
			$image = ArticleImage::where('id', $id)->first();
			
			$imagesPath = '/images/articles/';
	
			File::Delete(public_path($imagesPath . $image->name));
			File::Delete(public_path($imagesPath . $image->thumb));
	
			$image->delete();

			return H_Response(200, 'success', 'Imágen eliminada', $id);
		}
		catch (\Exception $e) 
		{
			dd($e->getMessage());
		}
	}

}
