import { Component } from '@angular/core';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.css'
})
export class AdvancedComponent {
  basePrompt: string = '';
  agentName: string = 'Agentt';
  agentModel: string = 'Standard Model (Llama-3.1 405B)';
  charCount: number = 0;
  emails: string[] = [''];
  notification: string | null = null;

  updateCharCount(): void {
    this.charCount = this.basePrompt.length;
  }

  addEmail(): void {
    this.emails.push('');
  }

  removeEmail(index: number): void {
    this.emails.splice(index, 1);
  }

  saveChanges(): void {
    if (this.emails.length > 0 && this.emails.some(email => email !== '')) {
      this.notification = 'Email updated successfully.';
    }

    if (this.agentName.trim()) {
      this.notification = this.notification ? 
        `${this.notification} Agent name updated successfully.` : 
        'Agent name updated successfully.';
    }

    setTimeout(() => {
      this.notification = null;
    }, 3000);  // Hide notification after 3 seconds
  }

  resetToDefault(): void {
    this.basePrompt = '';
    this.agentName = 'Agentt';
    this.agentModel = 'Standard Model (Llama-3.1 405B)';
    this.emails = [''];
    this.charCount = 0;
    this.notification = 'Form reset to default values.';

    setTimeout(() => {
      this.notification = null;
    }, 3000);  // Hide notification after 3 seconds
  }
}
