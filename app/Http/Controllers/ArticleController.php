<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Traits\CrudTrait;

use App\Article;
use App\ArticleImage;
use App\ArticleCategory;

use Carbon\Carbon;
Use Image;
Use File;

class ArticleController extends Controller
{
	use CrudTrait;

	public function __construct()
    {
        $this->middleware('auth');
	}

	
    public function index(Request $request)
    {
		// dd($request->all());
		$pagination = 15;

		try
		{
			$items = Article::search($request->search)
				->order($request->orderBy, $request->order)
				->with('images')
				->with('category')
				->paginate($pagination);
		}
		catch (\Exception $e)
		{
			return H_Response(200, 'error', 'Falla todo: '. $e->getMessage());
		}

		$data = $this->makeData($items);
		
		return $data;
	}
	

	public function getArticle($id)
	{
		$item = Article::where('id', $id)->with('images')->first();	
		return json_encode($item);
	}


	public function create()
	{
		$categories = ArticleCategory::all();
		return view('vadmin/articles/create')->with('categories', $categories);
	}
	

	public function edit($id)
	{
		$item = Article::where('id', $id)->with('images')->with('category')->first();
		return json_encode(['item' => $item]);
	}


    public function save(Request $request)
    {
		// dd($request->all());
		
		try {

			if($request->id != null) 
			{
				$item = Article::where('id', $request->id)->first();
				$successMessage[0] = 'Artículo actualizado';
			}
			else
			{
				$item = new Article();
				$successMessage[0] = 'Artículo creado';
			}

			$validation = $this->validator($request->all(), $item->id);

			if($validation->fails())
				return H_Response(200, 'error', $validation->errors());
			
			$item->fill($request->all());
			// $item->title = $request->title;
			// $item->content = $request->content;
			// $item->category_id = $request->category_id;
			// $item->address =  $request->address;
			// $item->address_latitude = $request->address_latitude;
			// $item->address_longitude = $request->address_longitude;
			// $item->prov_id = $request->prov_id;
			// $item->loc_id = $request->loc_id;
			// $item->published_on = $request->published_on; 
			// $item->published_at = $request->published_at; 
			// $item->phone = $request->phone; 
			// $item->hour = $request->hour; 
			// $item->age_from = $request->age_from; 
			// $item->age_to = $request->age_to; 
			// $item->daysText = $request->daysText;
			// $item->price = $request->price; 
			// $item->status = $request->status;	
			// $item->featured = $request->featured;
			// $item->order = $request->order;

			if(is_array($request->days))	
				$item->days = implode(',', $request->days);
			else
				$item->days = $request->days;

			if($request->published_on) {
				$item->published_on = Carbon::parse($request->published_on)->format('Y-m-d');
			}

			if($request->published_at) {
				$item->published_at = Carbon::parse($request->published_at)->format('Y-m-d');
			}

			if($request->date_begin) {
				$item->date_begin = Carbon::parse($request->date_begin)->format('Y-m-d');
			}
			
			if($request->date_ends) {
				$item->date_ends = Carbon::parse($request->date_ends)->format('Y-m-d');
			}

		
			if($item->save())
			{
				
				if( $request->images )
				{
					$imgWidth = 700;
					$imgHeight = 500;
					$extension = '.jpg';
					$imgPath = public_path("images/articles/");

					$files = $request->images;
					
					foreach ($files as $file) 
					{
						

						if(isset($file['path']))
						{
							$rand = rand (0,1000);
							$filename = 'article-' . $item->id . '-' . $rand . $extension;
							$thumbfilename = 'article-' . $item->id . '-' . $rand . '-thumb' . $extension;
					
							// File Main Image
							$img = \Image::make($file['path']);
							$img->encode('jpg', 80)->fit($imgWidth, $imgHeight)->save($imgPath . $filename);
							
							// File Thumb Image
							$img = \Image::make($file['path']);
							$img->encode('jpg', 80)->fit(250, 250)->save($imgPath . $thumbfilename);

							// DB Data
							$image = new ArticleImage();
							$image->name = $filename;
							$image->thumb = $thumbfilename;
							$image->article()->associate($item);
							$image->save();
						
							
						}
					}
			
				}
			}
		}
		catch (\Exception $e)
		{
			return H_Response(200, 'error', 'Falla la carga del articulo '. $e->getMessage());
		}
		if($item->status == 'A')
			$successMessage[1] = "El artículo tiene estado activo y está saliendo en los listados.";
		else
			$successMessage[1] = "El artículo está inactivo, para que salga en los listados debe activarlo.";

		return H_Response(200, 'success', $successMessage, $item->id);

	}
	
	/*
	|--------------------------------------------------------------------------
	| Validator
	|--------------------------------------------------------------------------
	*/

   
	public function validator(array $data, $itemId = null)
    {
		if(isset($itemId)) // If is updating exclude updated item
		{
			$fields = [
				'title' => 'required|unique:articles,title,' . $itemId,
			];
		}
		else // Creating new item
		{
			$fields = [
				'title' => 'required|unique:articles,title',
			];
		}

		$messages = [
			'title.required' => 'Debe ingresar un título',
			'title.unique'   => 'Ya existe un artículo con el título ingresado',
			'content.required' => 'Debe ingresar una descripción'

		];

		$validation = Validator::make($data, $fields, $messages);

		return $validation;
	}
	
	/*
	|--------------------------------------------------------------------------
	| Destroy
	|--------------------------------------------------------------------------
	*/

	public function destroy($ids)
    {		
		try 
		{
			$imagesPath = '/images/articles/';
			$itemsIds = json_decode('[' . str_replace("'", '"', $ids) . ']', true);

			if(count($itemsIds) == 1)
				$successMessage = 'Artículo Eliminado';
			else
				$successMessage = 'Artículos Eliminados';
			// $s = [];
			foreach ($itemsIds as $id) {
				$item = Article::find($id);
				
					if($item->images)
					{
						foreach($item->images as $image)
						{
							$image->delete();
							File::Delete(public_path($imagesPath . $image->name));
							File::Delete(public_path($imagesPath . $image->thumb));
						}
					}

				$item->delete();

			};
			
			return H_Response(200, 'success', $successMessage);
		} 
		catch (\Exception $e) 
		{
			return H_Response(500, 'error', $e->getMessage());
		}

	}
	


}
