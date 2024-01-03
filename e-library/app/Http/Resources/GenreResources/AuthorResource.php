<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GenreResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'Genre';

    public function toArray($request)
    {
        return [
            'genre_id' => $this->resource->genre_id,
            'name' => $this->resource->name
            
        ];
    }
}