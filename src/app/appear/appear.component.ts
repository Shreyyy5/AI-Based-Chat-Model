import { Component } from '@angular/core';

@Component({
  selector: 'app-appear',
  templateUrl: './appear.component.html',
  styleUrl: './appear.component.css'
})
export class AppearComponent {
  view = 'aiNav'; // default view
  isAiNav = true; // Default to AI Nav view
  toggleText = 'AI Nav';
  businessName: string = '';
  agentName: string = '';

  toggleView(view: string) {
    this.view = view;
  }

  // tips
    // tip popup
    showTipsPopup = false;

    openTipsPopup() {
      this.showTipsPopup = true;  // Show the popup
    }
  
    closeTipsPopup() {
      this.showTipsPopup = false;  // Hide the popup
    }

  // suggested questions
  questions = [
    { text: 'What does Hubspot do? 👜' },
    { text: 'Book a demo 🗓️' }
  ];

  addQuestion() {
    this.questions.push({ text: '' });
  }

  removeQuestion(index: number) {
    if (this.questions.length > 1) {
      this.questions.splice(index, 1);
    }
  }

  // color palate
  selectedColor: string = '';

  colors: string[] = [
    '#FF0000', // Red
  '#008000', // Green
  '#0000FF', // Blue
  '#FFFF00', // Yellow
  '#800080', // Purple
  '#FFA500', // Orange
  '#008080', // Teal
  '#FFC080', // Coral
  '#808000', // Brown
  '#000080', // Navy Blue
  ];

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  // avatar
  uploadAvatar() {
    document.getElementById('avatarInput').click();
  }
  
  onAvatarSelected(event) {
    const file = event.target.files[0];
    // You can then upload the file to your server or use it as needed
    console.log(file);
  }

  toggleState: boolean = false;

  // conversations
  actions: any[] = [];
  actionOptions: string[] = [
    'Website Link',
    'Email',
    'Phone'
  ];
  isDropdownOpen: boolean = false;

  addAction() {
    this.actions.push({ action: '', url: '' });
  }


  removeAction(index: number) {
    this.actions.splice(index, 1);
  }



  // upload popup
showPopup = false;

addUpload() {
  this.showPopup = true; // Show the popup when the button is clicked
}

closePopup() {
  this.showPopup = false; // Close the popup
}

onFileSelected(event: Event) {
  const fileInput = event.target as HTMLInputElement;
  if (fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    console.log('Selected file:', file);
    // Handle file upload logic here
  }
  
}
// add actionables
isDropdownVisible = false;
customActions = [];

toggleDropdown() {
  this.isDropdownVisible = !this.isDropdownVisible;
}

addCustomAction(type: string) {
  this.customActions.push({ title: '', value: '', type });
  this.isDropdownVisible = false;
}

getCustomPlaceholder(type: string): string {
  switch (type) {
    case 'Website Link':
      return 'https://...';
    case 'Email':
      return 'email@example.com';
    case 'Phone':
      return '+123456789';
    default:
      return '';
  }
}

addCustomRow(index: number) {
  this.customActions.splice(index + 1, 0, { title: '', value: '', type: this.customActions[index].type });
}

removeCustomRow(index: number) {
  this.customActions.splice(index, 1);
}




}
