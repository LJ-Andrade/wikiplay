<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Traits\HasPermissions;

class User extends Authenticatable
{
    use Notifiable, HasPermissions  ;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'first_name', 'last_name', 'email', 'password', 'image_id', 'status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'users_roles');
    }

    public function hasRole(...$roles)
    {
        // $user->hasRole('admin', 'developer');
        return $this->roles()->whereIn('slug', $roles)->count();
    }

    public function permissions()
    {
        return $this->belongsToMany(Permissions::class, 'users_permissions');
    }

    public function scopeSearch($query, $term)
    {
        if($term != null)
            return $query->where('username', 'LIKE', '%'. $term .'%')
                        ->orWhere('first_name', 'LIKE', '%'. $term .'%')
                        ->orWhere('last_name', 'LIKE', '%'. $term .'%')
                        ->orWhere('email', 'LIKE', '%'. $term .'%');
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
