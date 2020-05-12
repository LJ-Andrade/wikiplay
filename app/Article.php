<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $table = "articles";

    protected $fillable = [
        'title', 'content', 'category_id', 'address', 'address_latitude', 'address_longitude', 'prov_id', 'loc_id', 
        'phone', 'hour', 'age_from', 'age_to', 'price', 'status', 'featured', 'order', 'days', 'daysText', 
        'date_begin', 'date_ends', 'published_on', 'published_at' 
    ];

    public function prov()
    {
        return $this->belongsTo('App\Prov');
    }

    public function category()
    {
    	return $this->belongsTo('App\ArticleCategory');
    }

    public function images()
    {
    	return $this->hasMany('App\ArticleImage');
    }

    public function scopeSearch($query, $term)
    {
        if($term != null)
            return $query->where('title', 'LIKE', '%'. $term .'%')
                        ->orWhere('address', 'LIKE', '%'. $term .'%');
            
    }

    public function scopeAge($query, $age)
    {   
        // dd($age);
        if($age != null)
        {
            $value = explode(',', $age);
            // return $age;
            if($value[0] == '<' || $value[0] == '>')
            {
                if($value[0] == '<')
                    return $query->where('age_to', '<=', $value[1] );
                else
                    return $query->where('age_from', '<=', $value[1]);
            }
            else
            {
                return $query->where('age_from', '<=', $value[0])->where('age_to', '<=', $value[1]);
            }
        }
    }

    public function scopeCategory($query, $category)
    {   
        if($category != null)
        {
            return $query->where('category_id', $category);
        }
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
