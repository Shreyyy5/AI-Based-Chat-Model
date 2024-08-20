import { Component } from '@angular/core';

@Component({
  selector: 'app-manageteam',
  templateUrl: './manageteam.component.html',
  styleUrl: './manageteam.component.css'
})
export class ManageteamComponent {
  isModalOpen = false;
  newMember = {
    email: '',
    permission: 'User'
  };

  // Function to open the Add Member modal
  openAddMemberDialog() {
    this.isModalOpen = true;
  }

  // Function to close the Add Member modal
  closeAddMemberDialog() {
    this.isModalOpen = false;
  }

  // Function to add a new member
  addMember() {
    console.log('New Member:', this.newMember);

    // Clear the form fields after submission
    this.newMember = {
      email: '',
      permission: 'User'
    };

    // Close the modal
    this.closeAddMemberDialog();}
}
