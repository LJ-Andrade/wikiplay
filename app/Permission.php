<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $fillable = [
        'name', 'slug', 'description'
    ];


    public function roles()
    {
        return $this->belongsToMany(Role::class, 'roles_permissions');
    }
    
    public function scopeSearch($query, $term)
    {
        if($term != null)
            return $query->where('name', 'LIKE', '%'. $term .'%')
                        ->orWhere('slug', 'LIKE', '%'. $term .'%');
    }

    public function scopeOrder($query, $orderBy, $order)
    {
        if($order == null)
            $order = 'ASC';

        if($orderBy == null)
            $orderBy = 'created_at';
        
        return $query->orderBy($orderBy, $order);
    }
    
}
