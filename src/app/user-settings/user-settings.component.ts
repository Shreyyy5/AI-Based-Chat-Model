import { Component } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent {
  user = {
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor() {
    // Load user data (from a service or local storage)
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com'
    };
  }

  onSubmit() {
    // Handle form submission, e.g., save the changes to the server
    console.log('User settings saved', this.user);
    alert('Settings saved successfully!');
  }

}
