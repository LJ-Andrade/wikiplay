<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $table = 'settings';
    
    protected $fillable = [ 'id', 'email', 'vadmin_ui_sidebar', 'email', 'google_analitycs', 
                            'google_tag_manager', 'site_description', 'site_keywords', 'site_data' ];
}
