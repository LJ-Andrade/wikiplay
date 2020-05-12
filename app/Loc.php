<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Loc extends Model
{
    protected $table = "locs";

    protected $primaryKey = 'id';

    protected $fillable = [ 'name', 'prov_id' ];


    public function prov()
    {
        return $this->belongsTo('App\Prov');
    }

    public function articles()
    {
        return $this->hasMany('App\Article');
    }


    public function scopeSearch($query, $search = '')
    {
            return $query->where('name', 'LIKE', '%' . $search . '%')
                    ->orWhereHas('prov', function ($query) use($search){
                        $query->where('name', 'LIKE', '%' . $search . '%');
                    });
    }

}
