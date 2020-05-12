<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Traits\CrudTrait;
use App\ArticleCategory;


class ArticleCategoriesController extends Controller
{

	use CrudTrait;

	public function __construct()
    {
        $this->middleware('auth');
	}


    public function index(Request $request)
    {		
	
		// $requestTest = $request->all();
		$pagination = $this->setResultsPerPage($request->resultsPerPage);
		
		$order = 'asc';
		if(isset($request->order))
			$order = $request->order;
		
		$orderBy = $this->orderBy($request->orderBy, 'id');		

		if(isset($request->search))
		{
			$search = $request->search;
			$items = ArticleCategory::where('name', 'LIKE','%'.$search.'%')
							->orderBy($orderBy, $order)->paginate($pagination);
									
		}
		else
		{
			$items = ArticleCategory::orderBy($orderBy, $order)->paginate($pagination);
		}
		
		$data = $this->makeData($items);

		if($request->ajax())
			return $data;
		else
			return view('vadmin.articles.article_categories')->with('items', $items);
	}

	public function getAllCategories() 
	{
		$categories = ArticleCategory::all();
		return json_encode(['categories' => $categories]);
 	}
	
	public function save(Request $request)
	{

		$successMessage = 'Operación realizada correctamente';

		if($request->id != null) 
		{
			$item = ArticleCategory::where('id', $request->id)->first();
			$successMessage = 'Categoría actualizada';
		}
		else
		{
			$item = new ArticleCategory();
			$successMessage = 'Categoría creada';
		}

		try {
			$validation = $this->validator($request->all(), $request->id);
			
			if($validation->fails())
				return H_Response(200, 'error', $validation->errors());
			

			$item->name = $request->name;
			$item->save();

			return H_Response(200, 'success', $successMessage);
		} 
		catch (\Exception $e) 
		{
			return H_Response(200, 'error', 'Falla creación de categoría: '. $e->getMessage());
		}
		
	}
	
	public function validator(array $data, $itemId = null)
    {
		if(isset($itemId)) // If is updating exclude updated item
		{
			$fields = [
				'name' => 'required|unique:article_categories,name,'.$itemId,
			];
		}
		else // Creating new item
		{

			$fields = [
				'name' => 'required|max:60|unique:article_categories,name',
			];
		}

		$messages = [
			'name.required'    => 'Debe ingresar un nombre',
			'name.unique'      => 'La categoría ingresada ya existe en la base de datos',
		];


		$validation = Validator::make($data, $fields, $messages);
		
		return $validation;
	}

	
	public function destroy($ids)
    {
		$op = $this->GenericDestroy($ids, 'ArticleCategory');

		if($op == 'success')
			return H_Response(200, 'success', 'Categoría eliminada');
		else
			return H_Response(200, 'error', $op);
    }


}
