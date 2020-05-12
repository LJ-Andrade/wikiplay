<?php

namespace App\Http\Controllers\Core;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Traits\CrudTrait;
use App\Role;

class RoleController extends Controller
{

    use CrudTrait;

    public function index(Request $request)
    {	
		$pagination = $this->setResultsPerPage($request->resultsPerPage);

		$items = Role::search($request->search)
			->order($request->orderBy, $request->order)
			->paginate($pagination);

		return $this->makeData($items);

    }
    
    public function save(Request $request)
	{
        
		if($request->id != null) 
		{
			$item = Role::where('id', $request->id)->first();
			$successMessage = 'Rol actualizado';
		}
		else
		{
			$item = new Role();
			$successMessage[0] = 'Rol creado';
		}

		try {
			$validation = $this->validator($request->all(), $request->id);
			
			if($validation->fails())
				return H_Response(200, 'error', $validation->errors());
			
			$item->name = $request->name;
			$item->slug = $request->slug;
				
			$item->save();

			return H_Response(200, 'success', $successMessage);
		} 
		catch (\Exception $e) 
		{
			return H_Response(200, 'error', 'Falla creación de usuario: '. $e->getMessage());
		}
		
	}

    public function validator(array $data, $itemId = null)
    {
		if(isset($itemId) && $itemId != null) // If is updating exclude updated item
		{
			$fields = [
                'name' => 'required|max:30|unique:roles,name,'.$itemId,
                'slug' => 'required|max:30|unique:roles,slug,'.$itemId,
			];
		}
		else // Creating new item
		{
			$fields = [
				'name' => 'required|max:30|unique:roles,name',
                'slug' => 'required|max:30|unique:roles,slug'
			];
		}

		$messages = [
            'name.required'  => 'Debe ingresar un nombre',
            'slug.required'  => 'Debe ingresar un slug',
            'name.unique'    => 'El nombre del rol ya existe',
            'slug.unique'    => 'El slug del rol ya existe'
		];


		$validation = Validator::make($data, $fields, $messages);
		
		return $validation;
    }


    public function destroy($ids)
    {
		$op = $this->GenericDestroy($ids, 'Role');

		if($op == 'success')
			return H_Response(200, 'success', 'Rol eliminado correctamente');
		else
			return H_Response(200, 'error', 'Error al eliminar roles: ' . $op);
    }
}
