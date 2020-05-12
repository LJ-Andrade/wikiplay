<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('users')->truncate();
        DB::table('users')->delete();

        $adminRole = App\Role::where('slug', 'admin')->first()->id;
        $developerRole = App\Role::where('slug', 'developer')->first()->id;
   
        if(!User::where('username', 'javzero')->first())
        {
            $user = new User();
            $user->id = 1;
            $user->username = 'javzero';
            $user->first_name = 'Leandro';
            $user->last_name = 'Andrade';
            $user->email = 'javzero1@gmail.com';
            $user->password = bcrypt( '12121212' );
            // $user->image_id = $image->id;
            $user->save();
            
            $user->roles()->attach([$adminRole, $developerRole]);
            
            // $this->command->info('Usuario '. $item->username. ' agregado.');
        }

        factory(User::class, 30)->create()->each(function ($user) {
			factory(User::class)->make();
        });
        
        $roles = App\Role::all();

        // Populate the pivot table
        App\User::all()->each(function ($user) use ($roles) { 
            if($user->id != 1) 
            {
                $user->roles()->attach(
                    $roles->random(rand(1, $roles->count()))->pluck('id')->toArray()
                ); 
            }
        });
    }
}
