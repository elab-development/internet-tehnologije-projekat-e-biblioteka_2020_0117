<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*
        User::create([
            'uusername' => 'JOHN'
            'name' => 'John',
            'surname' => 'Doe',
            'email' => 'john@example.com',
            'password' => bcrypt('password'),
        ]);

        User::create([
            'uusername' => 'DEAN'
            'name' => 'Dean',
            'surname' => 'Doe',
            'email' => 'john@example.com',
            'password' => bcrypt('password'),
        ]);*/

        //UserSeeder::factory(10)->create();
        User::factory(5)->create();
    }
}
