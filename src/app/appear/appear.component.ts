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


  toggleView(view: string) {
    this.view = view;
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
}
