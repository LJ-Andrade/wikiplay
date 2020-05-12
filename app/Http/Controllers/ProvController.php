<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Prov;
use App\Traits\CrudTrait;


class ProvController extends Controller
{

	use CrudTrait;

	public function __construct()
    {
        $this->middleware('auth');
	}


    public function index(Request $request)
    {	
		// dd($request->all());
		if(isset($_GET['get']) && $_GET['get'] == 'all')
			return Prov::all();
			
		// Default
		$pagination = $this->setResultsPerPage($request->resultsPerPage);
		$order = 'asc';
		
		if(isset($request->order))
			$order = $request->order;
		
		$orderBy = $this->orderBy($request->orderBy, 'id');		
		
		$items = Prov::search($request->search)->orderBy($orderBy, $order)->paginate($pagination);

		$data = $this->makeData($items);
		
		return $data;
    }
	
	public function save(Request $request)
	{
		$successMessage = 'Operación realizada correctamente';

		if($request->id != null) 
		{
			$item = Prov::where('id', $request->id)->first();
			$successMessage = 'Provincia actualizada';
		}
		else
		{
			$item = new Prov();
			$successMessage = 'Provincia creada';
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
			return H_Response(200, 'error', 'Falla creación de provincia: '. $e->getMessage());
		}
		
	}
	public function destroy($ids)
    {
		$op = $this->GenericDestroy($ids, 'Prov');

		if($op == 'success')
			return H_Response(200, 'success', 'Provincia eliminada');
		else
			return H_Response(200, 'error', $op);
    }

		
	public function validator(array $data, $itemId = null)
    {
	
		if(isset($itemId)) // If is updating exclude updated item
		{
			$fields = [
				'name' => 'required|max:60|unique:provs,name,'.$itemId,
			];
		}
		else // Creating new item
		{
			$fields = [
				'name' => 'required|max:60|unique:provs,name'
			];
		}

		$messages = [
			'name.required'  => 'Debe ingresar un nombre',
			'name.unique'    => 'La provincia ingresada ya existe en la base de datos',
		];


		$validation = Validator::make($data, $fields, $messages);
		
		return $validation;
	}

}
