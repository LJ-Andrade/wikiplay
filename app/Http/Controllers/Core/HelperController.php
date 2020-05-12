<?php

namespace App\Http\Controllers\Core;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HelperController extends Controller
{

	public function changeStatus(Request $request)
	{
		$model = 'App\\' . $request->model;
		// dd($model);
		$item = $model::where('id', $request->id)->first();
		$item->status = $request->status;
		$item->save();

		return H_Response(200, 'success', 'Estado actualizado');
	}

}
