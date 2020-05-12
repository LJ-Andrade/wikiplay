<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prov extends Model
{
    protected $table = 'provs';

    protected $primaryKey = 'id';

    protected $fillable = [ 'name' ];

    public function locs()
    {
        return $this->hasMany('App\Loc');
    }

    public function articles()
    {
        return $this->hasMany('App\Article');
    }

    public function scopeSearch($query, $searchTerm)
    {
        return $query->where('name', 'LIKE','%'.$searchTerm.'%');
    }
}
