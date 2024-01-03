<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'user';

    public function toArray($request)
    {
        return [
            
            'user_id' => $this->resource->user_id,
            'name' => $this->resource->name,
            'surname' => $this->resource->surname,
            'email' => $this->resource->email,
            'username' => $this->resource->username,
            'date_of_paying' => $this->resource->date_of_paying,
            'date_payment_valid' => $this->resource->date_payment_valid,
            'admin' => $this->resource->admin
        ];
    }
}
