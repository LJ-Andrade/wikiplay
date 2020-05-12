<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Loc;
use App\Prov;
use App\Traits\CrudTrait;


class LocController extends Controller
{

	use CrudTrait;

	public function __construct()
    {
        $this->middleware('auth');
	}


    public function index(Request $request)
    {		
		// dd($request->all());
		if(isset($request->whereProv))
		{
			$items = Loc::where('prov_id', $request->whereProv)->pluck('name', 'id');
			return $items;
		}
		
		// $requestTest = $request->all();
		$pagination = $this->setResultsPerPage($request->resultsPerPage);
		
		$order = 'asc';
		if(isset($request->order))
			$order = $request->order;
		
		$orderBy = $this->orderBy($request->orderBy, 'id');		

		$items = Loc::search($request->search)->orderBy($orderBy, $order)->with('prov')->paginate($pagination);
		
		$data = $this->makeData($items);
		
		return $data;

    }
	
	public function save(Request $request)
	{

		$successMessage = 'Localidad agregada';

		if($request->id != null) 
		{
			$item = Loc::where('id', $request->id)->first();
			$successMessage = 'Categoría actualizada';
		}
		else
		{
			$item = new Loc();
			$successMessage = 'Categoría agregada';
		}

		try {
			$validation = $this->validator($request->all(), $request->id);
			
			if($validation->fails())
				return H_Response(200, 'error', $validation->errors());
			
			$item->name = $request->name;
			$item->prov_id = $request->prov_id;
			$item->save();

			return H_Response(200, 'success', $successMessage);
		} 
		catch (\Exception $e) 
		{
			return H_Response(200, 'error', 'Falla creación de localidad: '. $e->getMessage());
		}
	}
	

	public function destroy($ids)
    {
		$op = $this->GenericDestroy($ids, 'Loc');

		if($op == 'success')
			return H_Response(200, 'success', 'Localidad eliminada');
		else
			return H_Response(200, 'error', $op);
    }

		
	public function validator(array $data, $itemId = null)
    {
		if(isset($itemId)) // If is updating exclude updated item
		{
			$fields = [
				'name' => 'required|unique:locs,name,'.$itemId,
				'prov_id' => 'required'
			];
		}
		else // Creating new item
		{

			$fields = [
				'name' => 'required|max:60|unique:locs,name',
				'prov_id' => 'required'
			];
		}

		$messages = [
			'name.required'    => 'Debe ingresar un nombre',
			'name.unique'      => 'La localidad ingresada ya existe en la base de datos',
			'prov_id.required' => 'Debe seleccionar una provincia'
		];


		$validation = Validator::make($data, $fields, $messages);
		
		return $validation;
	}

}
