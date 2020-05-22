<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/test', 'Core\SpaController@test');

// WebSite
Route::get('/', 'Web\WebController@index');
Route::get('getArticles', 'Web\WebController@getArticles');
Route::get('getSpecialArticles', 'Web\WebController@getSpecialArticles');
Route::get('getCategories', 'Web\WebController@getCategories');

// Route::get('/', function () {
//     return view('web/index');
// });

// Auth
Auth::routes();
Route::get('/vadmin/logout', 'Auth\LoginController@logout');

// Vadmin
Route::post('setSetting', 'Core\SettingsController@setSetting');
Route::post('setSettings', 'Core\SettingsController@setSettings');
Route::get('getSettings', 'Core\SettingsController@getSettings');



Route::group(['prefix' => 'vadmin'], function(){
    
    Route::get('/', 'Core\VadminController@index')->name('vadmin');
    
    Route::get('getAuthUser', 'Core\UserController@getAuthUser');
    
    
    // Settings
    // Route::get('configuraciones', ['as' => 'settings', 'uses' => 'Core\SettingsController@index']);
    
    // Articles
    Route::resource('articles', 'ArticleController');
    Route::put('saveArticle', 'ArticleController@save');
    Route::get('getArticle/{id}', 'ArticleController@getArticle');
    
    // Categories
    Route::put('save_article_categories', 'ArticleCategoriesController@save');
    Route::resource('article_categories', 'ArticleCategoriesController');
    Route::get('get_all_categories', 'ArticleCategoriesController@getAllCategories');

    // Users
    // Route::get('users', 'Core\UserController@index');
    Route::put('save_users', 'Core\UserController@save');
    Route::resource('users', 'Core\UserController');
    Route::delete('users/{ids}', 'Core\UserController@destroy');

    // Provs
    Route::put('save_provs', 'ProvController@save');
    Route::resource('provs', 'ProvController');

    // Locs
    Route::put('save_locs', 'LocController@save');
    Route::resource('locs', 'LocController');

    // Roles
    Route::put('save_roles', 'Core\RoleController@save');
    Route::resource('roles', 'Core\RoleController');

    // Permissions
    Route::put('save_permissions', 'Core\PermissionController@save');
    Route::resource('permissions', 'Core\PermissionController');

    Route::resource('images', 'ArticleImageController');

    Route::post('changeStatus', 'Core\HelperController@changeStatus');


    // Tools
    Route::get('tools', 'Core\ToolController@ExtractDataFromDB');

    // SPA Route
    Route::get('/{any}', 'Core\SpaController@index')->where('any', '.*');

    
});

// Route::get('/{any}', 'Core\VadminController@page404')->where('any', '.*');

