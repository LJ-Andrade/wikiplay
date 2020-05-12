<?php

namespace App\Traits;

use Cookie;

trait CrudTrait {

	public function orderBy($request, $default)
	{
		$orderBy = $default;
		if(isset($request))
		{	
					
			$cookie = $this->setCookie('orderBy', $request);
			$orderBy = $request;
		}
		else
		{
			if($this->getCookie('orderBy'))
			{
				$orderBy = $this->getCookie('orderBy');
			}
		}
		
		return $orderBy;
	}

	public function setCookie($name, $value = null)
	{
		
		cookie($name, $value, 2000);
		// Cookie::queue($name, $value, 2000);
		// return $cookie;
	}

	public function getCookie($name)
	{
		$cookie = Cookie::get($name);
		return $cookie;
	}

	/**
	 * Process data and pagination structure
	 *
	 * @return array
	 */
	public function makeData($items)
	{

		$data = [
			'pagination' => [
				'total'        => $items->total(),
				'current_page' => $items->currentPage(),
				'per_page'     => $items->perPage(),
				'last_page'    => $items->lastPage(),
				'from'         => $items->firstItem(),
				'to'           => $items->lastItem(),
			],
			'items' => $items,
		];

		return $data;
	}

	public function setResultsPerPage($resultsPerPage)
	{
		if($resultsPerPage != null)
			return $resultsPerPage;		
		
		return 10; // Default results per page

	}

	public function GenericDestroy($ids, $modelName, $message = null)
	{
		// If debug is needed just return var as message -> return $var; 
		$itemsIds = json_decode('[' . str_replace("'", '"', $ids) . ']', true);
		
		$model = 'App\\' . $modelName;
		foreach ($itemsIds as $id) {
			try 
			{
				$item = $model::findOrFail($id);
				$item->delete();
			}
			catch (\Exception $e) 
			{
				dd($e->getMessage());
				// return $e->getMessage();
			} 
			
		}

		return 'success';
	}

}