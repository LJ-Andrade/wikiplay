<?php

namespace App\Http\Controllers\Core;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Loc;
use App\Prov;

class ToolController extends Controller
{
 
    public function ExtractDataFromDB()
    {
        // Localidades
        // $locs = Loc::all();

        // echo '[';
        // foreach ($locs as $loc) {
        //     echo "[".$loc->id.",'". $loc->name."',". $loc->geoprov_id ."],";
        // }
        // echo ']';
        
        //Provincias
        $provs = Prov::all();
        
        echo '[';
        foreach ($provs as $prov) {
            echo "[".$prov->id.",'". $prov->name."'],";
        }
        echo ']';

        die();
    }
}
