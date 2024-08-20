 import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { NgForm } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent {
  isRegister = false;
  isAccountCreated = false; // Flag for showing the pop-up

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  toggleContainer(action: string) {
    this.isRegister = action === 'register';
  }
  

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;
      if (this.isRegister) {
        this.register(formData);
      } else {
        this.login(formData);
      }
      
      console.log('Form submitted:', form.value);
    }
  }

  register(formData: NgForm) {
    // Simulate successful account creation
    console.log('Register:', formData);
    
    // Set flag to show the success pop-up
    this.isAccountCreated = true;

  }

  login(formData: NgForm) {
    console.log('Login:', formData);
    this.router.navigate(['/create-agent']);
  }

  closePopup() {
    console.log('Closing popup');
    this.isAccountCreated = false; // Close the pop-up
    this.cdr.detectChanges();
  }

  

  
}




