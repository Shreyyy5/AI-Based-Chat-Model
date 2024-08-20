import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent {
  view: string = 'widget';
  businessName: string = '';
  agentName: string = '';
  selectedLanguage: string = 'en';
  selectedColor: string = '';
  toggleState: boolean = false;

  constructor(private router: Router) {}

  toggleView(view: string): void {
    this.view = view;
  }

  openVideo(): void {
    const youtubeUrl = 'https://youtu.be/9VhJCGUBkcw?si=Ch5Iu9vCXyDFSz1T';
    window.open(youtubeUrl, '_blank');
  }

  languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'zh', label: 'Chinese' }
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

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  onSubmit(): void {
    if (!this.businessName.trim() || !this.agentName.trim()) {
      alert('Business Name and Agent Name are required.');
      return;
    }

    alert(`Business Name: ${this.businessName}\nAgent Name: ${this.agentName}\nLanguage: ${this.selectedLanguage}\nSelected Color: ${this.selectedColor}\nGradient Border: ${this.toggleState}`);

    // Navigate to TryMyAgentComponent
    this.router.navigate(['/try-my-agent']);
  }

  getChatBoxColor(): string {
    return this.selectedColor || '#f9f9f9';
  }
}
