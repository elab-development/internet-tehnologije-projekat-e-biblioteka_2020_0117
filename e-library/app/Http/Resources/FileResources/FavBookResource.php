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
            'file' => new FileResource($this->resource->file)
        ];
    }
}
