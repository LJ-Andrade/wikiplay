TODO

Cuando se hace click en la página 1 de la paginación muestra el skeletonList.
Solo lo tiene que mostrar cuando carga la sección por primera vez.


HECHO
Que los parent en list tengan mismo color y que tengan una flechita demostrando que tienen cosas adentro
HECHO
Arreglar modales, piden Jquery, usar Bootstrap VUE
HECHO
Checkbox para eliminación múltiple
HECHO
Cuando se hace update en una lista se debería retornar a la misma página y no a la página 1


Posibles errores

Prevent event on geosearch leaflet 

En el archivo vadmin2\node_modules\vue2-leaflet-geosearch\Vue2LeafletGeosearch.vue

agregar la siguiente línea 

deferredMountedTo(parent) {
	const searchControl = new GeoSearchControl(this.options);
	parent.addControl(searchControl);
	>>>>>   searchControl.getContainer().onclick = e => { e.stopPropagation(); };
},


ERROR: Error de symlink al instalar npm

Solucion:
sudo npm install --no-bin-links
sudo npm cache clear
sudo npm install --force --no-bin-links

Otra posible solucion
sudo npm rebuild node-sass --no-bin-links
sudo npm cache clear


ERROR: cross-env NODE_ENV

Solucion 1:
rm -rf node_modules
rm package-lock.json yarn.lock
npm cache clear --force
npm install

Solucion 2:
npm install --global cross-env


Ruta vadmin no funciona
------------------
Problema: La ruta Vadmin mostraba el contenido del directorio public
Solución: Había una carpeta (public/vadmin) que generaba conflicto. Remover.


## prevent CORS policy: No 'Access-Control-Allow-Origin' on API

#### Create Cors middleware
> php artisan make:middleware Cors

>app/Http/Middleware/Cors.php
>public function handle($request, Closure $next)
>{
>    return $next($request)
>        ->header('Access-Control-Allow-Origin', '*')
>        ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
>}

> app/Http/Kernel.php $routedMiddleware array add
> 'cors' => \App\Http\Middleware\Cors::class,

>Route/api.php
>Route::group(['middleware' => 'cors'], function () {
>    
>    Route::get('/v1/employees/{id?}', 'Employees@index');
>    Route::post('/v1/employees', 'Employees@store');
>    Route::post('/v1/employees/{id}', 'Employees@update');
>    Route::delete('/v1/employees/{id}', 'Employees@destroy');
>    
>});


Secciones de Listas


La ruta de la lista es definida en el store vadminStore.js

Cuando una sección cargar redefine ese store en el método created mediante un mutator.
Luego la lista llama a fetchData() en Mounted para obtener los resultados.



Componente principal de renderizado de listas

Propiedades a pasar:

customModal => TRUE: Si se quiere usar un modal por defecto y no el genérico.
			por defecto: undefined | false
