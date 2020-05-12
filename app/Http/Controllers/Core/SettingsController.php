<?php

namespace App\Http\Controllers\Core;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Setting;

class SettingsController extends Controller
{

    public function index(Request $request)
    {
        return $this->getSettings();
    }

    public function getSettings()
    {   
        try
        {
            $settings = Setting::where('id', 1)->first();
            return $settings;
        }
        catch (\Exception $e) 
        {
            return H_Response(200, 'error', 'Falla todo: '. $e->getMessage());
        }
    }

    public function setSetting(Request $request)
    {   
        // return H_Response(200, 'error', 'Falla todo: ', $request->all());

        try
        {
            $settings = Setting::where('id', 1)->first();
            $settings->{$request->setting} = $request->value;
            $settings->save();

            return H_Response(200, 'ok', 'hecho', $request->setting);
        }
        catch (\Exception $e) 
        {
            return H_Response(200, 'error', 'Falla guardado de setting: '. $e->getMessage());
        }
    }

    public function setSettings(Request $request)
    {   
        

        try
        {
            $settings = Setting::where('id', 1)->first();
            $settings->vadmin_ui_sidebar = $request->vadmin_ui_sidebar;
            $settings->email = $request->email;
            $settings->google_analitycs = $request->google_analitycs;
            $settings->google_tag_manager = $request->google_tag_manager;
            $settings->site_description = $request->site_description;
            $settings->site_keywords = $request->site_keywords;
            $settings->site_data = $request->site_data;
            
            $settings->save();
            return H_Response(200, 'success', 'Configuraciones actualizadas', $settings);
        }
        catch (\Exception $e) 
        {
            return H_Response(200, 'error', 'Falla todo: '. $e->getMessage());
        }
    }


}
