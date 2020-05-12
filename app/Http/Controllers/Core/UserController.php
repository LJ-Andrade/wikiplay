<?php

namespace App\Http\Controllers\Core;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Traits\CrudTrait;
use App\User;
use Auth;

class UserController extends Controller
{
	use CrudTrait;

	public function __construct()
    {
        $this->middleware('auth');
	}

	
    public function index(Request $request)
    {	

		// dd($request->all());
		
		$pagination = $this->setResultsPerPage($request->resultsPerPage);

		$items = User::search($request->search)
			->order($request->orderBy, $request->order)
			->with('roles')
			->paginate($pagination);

		// return $items;
		return $this->makeData($items);

	}

	public function getAuthUser() 
	{
		return Auth::user();
	}

	public function save(Request $request)
	{
		
		if($request->id != null) 
		{
			$item = User::where('id', $request->id)->first();
			$successMessage = 'Usuario actualizado';
		}
		else
		{
			$item = new User();
			$successMessage[0] = 'Usuario creado';
		}

		try {
			$validation = $this->validator($request->all(), $request->id);
			
			if($validation->fails())
				return H_Response(200, 'error', $validation->errors());
			

			$item->username = $request->username;
			$item->email = $request->email;
			$item->first_name = $request->first_name;
			$item->last_name = $request->last_name;
			$item->password = Hash::make($request->password);
				
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
				'username' => 'required|max:30|unique:users,username,'.$itemId,
				'email' => 'required|email|max:255|unique:users,email,'.$itemId,
				'first_name' => 'string|max:255',
				'last_name' => 'string|max:255',
				// 'password' => 'required|string|min:8|confirmed',
			];
		}
		else // Creating new item
		{
			$fields = [
				'username' => 'required|max:20|unique:users,username',
				'email' => 'required|email|max:255|unique:users,email',
				'first_name' => 'string|max:255',
				'last_name' => 'string|max:255',
				'password' => 'required|string|min:8|confirmed',
			];
		}

		$messages = [
			'username.required'  => 'Debe ingresar un nombre de usuario',
			'username.unique'    => 'El nombre ingresado ya existe en la base de datos',
			'email.required'     => 'Debe ingresar un email',
			'email.unique'       => 'El email ingresado ya existe en la base de datos',
			'password.required'  => 'Debe ingresar una contraseña',
			'password.confirmed' => 'Las contraseñas ingresadas no coinciden'
		];


		$validation = Validator::make($data, $fields, $messages);
		
		return $validation;
    }


    public function destroy($ids)
    {
		$op = $this->GenericDestroy($ids, 'User');

		if($op == 'success')
			return H_Response(200, 'success', 'Usuario eliminado correctamente');
		else
			return H_Response(200, 'error', 'Error al eliminar usuarios: ' . $op);
    }
}
