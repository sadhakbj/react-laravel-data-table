<?php

namespace App\Http\Resources;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param $request
     *
     * @return array
     */
    public function toArray($request): array
    {
        /** @var User $this */
        return [
            'name'       => $this->name,
            'email'      => $this->email,
            'address'    => $this->address,
            'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
        ];
    }
}
