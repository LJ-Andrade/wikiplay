<?php

use Illuminate\Database\Seeder;
use App\Setting;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->truncate();

        $item = new Setting();
        $item->id = 1;
        $item->email = 'javzero1@gmail';
        $item->vadmin_ui_sidebar = 1;
        $item->google_analitycs = '';
        $item->google_tag_manager = '';
        $item->site_description = '';
        $item->site_keywords = '';
        $item->save();        
    }
}
