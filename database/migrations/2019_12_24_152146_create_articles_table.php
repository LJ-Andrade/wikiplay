<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('content')->nullable();
            $table->integer('category_id')->nullable();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->double('address_latitude')->nullable();
            $table->double('address_longitude')->nullable();
            $table->integer('loc_id')->nullable();
            $table->integer('prov_id')->nullable();
            $table->integer('age_from')->nullable();
            $table->integer('age_to')->nullable();
            $table->integer('price')->nullable();
            $table->string('hour')->nullable();
            $table->string('days')->nullable();
            $table->string('daysText')->nullable();
            $table->date('date_begin')->nullable();
            $table->date('date_ends')->nullable();
            $table->boolean('featured')->nullable();
            $table->integer('order')->nullable();
            $table->string('status')->default('A')->nullable(); // A: Active // I: Inactive
            $table->date('published_on')->nullable();
            $table->date('published_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
