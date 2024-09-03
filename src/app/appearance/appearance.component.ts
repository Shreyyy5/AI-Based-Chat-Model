import { Component } from '@angular/core';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.css']
})
export class AppearanceComponent {
  view: string = 'widget';
  businessName: string = '';
  agentName: string = '';
  selectedLanguage: string = 'po';
  selectedFont: string = 'en';
  selectedPopup: string = 'hi';
  selectedCollapse: string = 'ne';
  selectedColor: string = '';
  selectedPlatform: string = 'ai';
  toggleState: boolean = false;
  selectedPosition='cl';
  welcomeMessage: string = 'Welcome 👋! How can we help you today?';
  hubspotName: string = '';
  toggleShowSources: boolean = false;
  toggleSoundEffects: boolean = false;
  toggleTermsConditions: boolean = false;


  languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'zh', label: 'Chinese' }
  ];

  font = [
    { value: 'po', label: 'Poppins (Google)' },
    { value: 'ub', label: 'Ubuntu(Google)' },
    { value: 'me', label: 'Merrierweather(Google)' },
    { value: 'ro', label: 'Roboto(Google)' },
    { value: 'ar', label: 'Archerus Grotesque' }
  ];

  popup = [
    { value: 'hi', label: 'High Enhancement' },
    { value: 'wh', label: 'White' },
    { value: 'so', label: 'Solid' },
    { value: 'gr', label: 'Gradient' },
    { value: 'no', label: 'None' }
  ];


  collapses = [
    { value: 'ne', label: 'Never' },
    { value: 'on', label: 'On Mobile' },
    
  ];

  platform = [
    { value: 'ai', label: 'Airbnb' },
    { value: 'am', label: 'Amazon' },
    { value: 'an', label: 'Android' },
    { value: 'ap', label: 'Apple' },
    { value: 'be', label: 'Behance' },
    { value: 'cr', label: 'Crypto' },
    { value: 'dr', label: 'Dropbox' },
    { value: 'fa', label: 'Facebook' },
    { value: 'gi', label: 'Github' }

    
  ];

  position = [
  
    { value: 'cl', label: 'Close' },
    { value: 'me', label: 'Medium' },
    { value: 'fa', label: 'Far' }

    
  ];


  
  uploadAvatar() {
    document.getElementById('avatarInput').click();
  }
  
  onAvatarSelected(event) {
    const file = event.target.files[0];
    // You can then upload the file to your server or use it as needed
    console.log(file);
  }

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

  toggleView(view: string): void {
    this.view = view;
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  openVideo(): void {
    const youtubeUrl = 'https://youtu.be/9VhJCGUBkcw?si=Ch5Iu9vCXyDFSz1T';
    window.open(youtubeUrl, '_blank');
  }

  onSubmit(): void {
    if (!this.businessName.trim() || !this.agentName.trim()) {
      alert('Business Name and Agent Name are required.');
      return;
    }

    alert(`Business Name: ${this.businessName}\nAgent Name: ${this.agentName}\nLanguage: ${this.selectedLanguage}\nSelected Color: ${this.selectedColor}\nGradient Border: ${this.toggleState}`);
  }

  getChatBoxColor(): string {
    return this.selectedColor || '#f9f9f9';
  }

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

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen; // Toggle dropdown visibility
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


  // tip popup
  showTipsPopup = false;

  openTipsPopup() {
    this.showTipsPopup = true;  // Show the popup
  }

  closeTipsPopup() {
    this.showTipsPopup = false;  // Hide the popup
  }




  

  addAction2(action: string) {
    if (action) {
      this.actions.push({ action: action, url: '' });
    }
    this.isDropdownOpen = false; // Close dropdown after adding action
  }


  options = [
    'Remove Powered by chatsimple',
    'View profile first',
    'Remove Share Button',
    'Disable profile mode'
  ];

  selectedOptions: string[] = [];
  dropdownVisible = false;

  toggleDropdown2() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  toggleOption2(option: string) {
    if (this.selectedOptions.includes(option)) {
      this.selectedOptions = this.selectedOptions.filter(o => o !== option);
    } else {
      this.selectedOptions.push(option);
    }
  }

  removeOption(option: string) {
    this.selectedOptions = this.selectedOptions.filter(o => o !== option);
  }

  // update
  
  updatedName: string | null = null;

  updateName(): void {
    this.updatedName = this.hubspotName;
  }
}
