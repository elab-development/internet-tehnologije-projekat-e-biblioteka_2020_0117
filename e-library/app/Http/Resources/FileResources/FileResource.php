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
            'num_pages' => $this->resource->num_pages,
            'file_path' => $this->resource->file_path,
            'genre' => new GenreResource($this->resource->genre),
            'author_id' => new AuthorResource($this->resource->author),
            
        ];
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 719fe4622bea2748bd752e188d1fc1c75083daf5
