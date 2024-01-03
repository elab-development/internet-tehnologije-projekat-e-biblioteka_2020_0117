<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            
            'book_id' => $this->resource->book_id,
            'name' => $this->resource->name,
            'num_pages' => $this->resource->num_pages,
            'genre' => new GenreResource($this->resource->genre),
            'author_id' => new AuthorResource($this->resource->author),
            
        ];
    }
}
