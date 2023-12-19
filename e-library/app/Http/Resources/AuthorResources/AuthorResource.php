<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AuthorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'Author';

    public function toArray($request)
    {
        return [
            'author_id' => $this->resource->author_id,
            'name' => $this->resource->name,
            'surname' => $this->resource->surname
        ];
    }
}
