<?php

namespace Database\Seeders;

use App\Enum\PermissionsEnum;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Enum\RolesEnum;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Models\Feature;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    $userRole = Role::create(["name" => RolesEnum::User->value]);
    $commenterRole = Role::create(["name" => RolesEnum::Commenter->value]);
    $adminRole = Role::create(["name" => RolesEnum::Admin->value]);

    // Manage Feature Permissions
    $manageFeaturePermissions = Permission::create(['name' => PermissionsEnum::ManageFeatures->value]);
    $manageUserPermissions = Permission::create(['name' => PermissionsEnum::ManageUsers->value]);
    $manageCommentsPermissions = Permission::create(['name' => PermissionsEnum::ManageComments->value]);
    $managePostsPermissions = Permission::create(['name' => PermissionsEnum::ManagePosts->value]);
    $upvoteDownvotePermissions = Permission::create(['name' => PermissionsEnum::UpvoteDownvote->value]);

    // Assign permissions to roles
    $userRole->syncPermissions([$upvoteDownvotePermissions]);
    $commenterRole->syncPermissions([$upvoteDownvotePermissions, $manageCommentsPermissions]);
    $adminRole->syncPermissions([
      $manageFeaturePermissions,
      $manageUserPermissions,
      $manageCommentsPermissions,
      $managePostsPermissions,
      $upvoteDownvotePermissions,
    ]);

    // Create test users with roles
    User::factory()->create([
      'name' => 'User Test User',
      'email' => 'test@example.com',
    ])->assignRole(RolesEnum::User);

    User::factory()->create([
      'name' => 'Commenter Test User',
      'email' => 'commenter@example.com',
    ])->assignRole(RolesEnum::Commenter);

    User::factory()->create([
      'name' => 'Admin Test User',
      'email' => 'admin@example.com',
    ])->assignRole(RolesEnum::Admin);

    // Create Test Features
    Feature::factory(100)->create();
  }
}
