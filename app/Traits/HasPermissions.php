<?php

namespace App\Traits;

use App\Permission;

trait HasPermissions 
{

    public function hasPermissionTo(...$permission)
    {
        // $user->hasPermissionTo('edit-user', 'delete-user');
        return $this->permissions()->whereIn('slug', $permissions)->count() ||
            $this->roles()->whereHas('permissions', function($q) use ($permissions) {
                $q->whereIn('slug', $permissions);
            })->count();
    }

    private function getPermissionsIdsBySlug($permissions)
    {
        return Permission::whereIn('slug', $permissions)->get()->pluck('id')->toArray(); 
    }

    public function givePermissionTo(...$permissions)
    {
        
        $this->permissions()->attach($this->getPermissionsIdsBySlug($permissions));
    }

    public function setPermissions(...$permissions)
    {
        $this->permissions()->sync($this->getPermissionsIdsBySlug($permissions));
    }

    public function detachPermissions(...$permissions)
    {
        $this->permissions()->detach($this->getPermissionsIdsBySlug($permissions)); 
    }

}