<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FileResource extends JsonResource
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
            
            'file_id' => $this->resource->file_id,
            'name' => $this->resource->name,
            'description' => $this->resource->description,
            'file_path' => $this->resource->file_path,
            'genre_id' => new GenreResource($this->resource->genre),
            'author_id' => new AuthorResource($this->resource->author),
            
        ];
    }
};
