import { Component } from '@angular/core';

interface Question {
  question: string;
  answer: string;
  isEscalated: boolean; // Ensure this property is defined
}

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent {
  questions: Question[] = []; // Use the Question interface
  showAddQuestionForm = false;
  editingIndex: number | null = null;

  openAddQuestionForm(index: number | null = null) {
    this.editingIndex = index;
    this.showAddQuestionForm = true;
  }

  addQuestion(newQuestion: { question: string, answer: string }) {
    const questionWithEscalation: Question = {
      ...newQuestion,
      isEscalated: false // Default value
    };

    if (this.editingIndex !== null) {
      this.questions[this.editingIndex] = questionWithEscalation;
    } else {
      this.questions.push(questionWithEscalation);
    }

    this.showAddQuestionForm = false;
    this.editingIndex = null;
  }

  deleteAllQuestions() {
    this.questions = [];
  }

  editQuestion(index: number) {
    this.openAddQuestionForm(index);
  }

  deleteQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  successMessage: string | null = null;

  // Toggle the escalation state of a question
  toggleEscalation(q: Question): void {
    q.isEscalated = !q.isEscalated;
    this.successMessage = 'Successfully updated escalation status for FAQ.';
    setTimeout(() => {
      this.successMessage = null; // Clear the message after a few seconds
    }, 3000);
  }
}
