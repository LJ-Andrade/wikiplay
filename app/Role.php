<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\HasPermissions;

class Role extends Model
{

    use HasPermissions;

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'roles_permissions');
    }

    public function hasPermissionTo(...$permission)
    {
        // $user->hasPermissionTo('edit-user', 'delete-user');
        return $this->permissions()->whereIn('slug', $permissions)->count(); 
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
