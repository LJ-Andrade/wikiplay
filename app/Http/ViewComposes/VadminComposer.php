<?php 

namespace App\Http\ViewComposes;

use Illuminate\Contracts\View\View;
use App\Setting;

class VadminComposer
{
    public function compose(View $view)
    {
        $appSettings = Setting::find(1);
        
        if($appSettings)
            $view->with('appSettings', $appSettings);
    }
}