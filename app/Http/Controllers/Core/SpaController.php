<?php

namespace App\Http\Controllers\Core;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SpaController extends Controller
{
	public function __construct()
    {
        $this->middleware('auth');
	}

    public function index()
    {
        return view('vadmin.index');
    }

    public function test()
    {
        $menu = array(
				['child', 'Usuarios', 'users', 'fas fa-user'],
				['parent', 'Artículos', 'fas fa-plus', 
					['child', 'Listado', 'articles', 'fas fa-list'],
					['child', 'Nuevo Artículo', 'create_article', 'fas fa-plus'],
					['child', 'Categorías', 'article', 'fas fa-file-alt'],
				],
				['parent', 'Configuración', 'fas fa-plus', 
					['child', 'General', 'settings', 'fas fa-plus'],
					['child', 'Provincias', 'provs', 'fas fa-plus'],
					['child', 'Localidades', 'locs', 'fas fa-file-alt'],
				],
			);

        return json_encode($menu);
    }
}
