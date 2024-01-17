<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FavBookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'fav_book';


    public function toArray($request)
    {

        return [
            
            'user' => new UserResource($this->resource->user),
<<<<<<< HEAD
            'book' => new FileResource($this->resource->file)
=======
            'file' => new FileResource($this->resource->file)
>>>>>>> 719fe4622bea2748bd752e188d1fc1c75083daf5
        ];
    }
}
