<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFeatureRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    return [
      'name' => ['required', 'string', 'max:255'],
      'description' => ['nullable', 'string', 'max:2000'],
    ];
  }

  public function messages()
  {
    return [
      'name.required' => 'The name field is required.',
      'name.string' => 'The name field must be a string.',
      'name.max' => 'The name field must not be greater than 2000 characters.',
      'description.string' => 'The description field must be a string.',
      'description.max' => 'The description field must not be greater than 255 characters.',
    ];
  }
}
