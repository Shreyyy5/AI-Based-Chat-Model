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
  selectedLanguage: string = 'en';
  selectedCollapse: string = 'ne';
  selectedColor: string = '';
  toggleState: boolean = false;
  welcomeMessage: string = 'Welcome 👋! How can we help you today?';

  languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'zh', label: 'Chinese' }
  ];

  collapses = [
    { value: 'ne', label: 'Never' },
    { value: 'on', label: 'On Mobile' },
    
  ];

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
}
