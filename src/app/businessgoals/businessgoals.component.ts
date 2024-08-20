import { Component } from '@angular/core';

@Component({
  selector: 'app-businessgoals',
  templateUrl: './businessgoals.component.html',
  styleUrls: ['./businessgoals.component.css']
})
export class BusinessgoalsComponent {
  isModalOpen: boolean = false;
  businessName: string = 'Tesla';
  isEditing: boolean = false;
  actions: any[] = [];
  actionOptions: string[] = [
    'Schedule a demo meeting',
    'Watch a demo video',
    'Give a special offer',
    'Direct to a page',
    'Ask to fill out the form',
    'Other'
  ];
  isDropdownOpen: boolean = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  updateBusinessName() {
    this.isEditing = false;
    alert('Successfully updated call to action');
  }

  addAction(action: string) {
    if (action) {
      this.actions.push({ action: action, url: '' });
    }
    this.isDropdownOpen = false; // Close dropdown after adding action
  }

  removeAction(index: number) {
    this.actions.splice(index, 1);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen; // Toggle dropdown visibility
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
