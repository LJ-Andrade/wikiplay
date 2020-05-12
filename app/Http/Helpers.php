<?php
/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

/**
 * Return a Json Response
 *
 * @return resoponse
 */
function H_Response($code = 200, $status = null, $message = null, $data = null) 
{
	return response()->json([
		'status'  => $status,
		'message' => $message,
		'data'    => $data
	], $code);
}

function H_Jsondd($data) 
{
	return response()->json([
		'status' => 'error',
		'type' => 'Json Dump',
		'data' => $data
	], 200);
}