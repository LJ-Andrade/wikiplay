<?php

use Illuminate\Database\Seeder;

use App\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->delete();

        Role::insert([
            [
                "id"   => 1,
                "name" => "Developer",
                "slug" => "developer"
            ],
            [
                "id"   => 2,
                "name" => "Admin",
                "slug" => "admin"
            ],
            [
                "id"   => 3,
                "name" => "User",
                "slug" => "user"
            ]
        ]);
    }
}
