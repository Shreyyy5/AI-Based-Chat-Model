import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-question-form',
  templateUrl: './add-question-form.component.html',
  styleUrls: ['./add-question-form.component.css']
})
export class AddQuestionFormComponent {
  @Input() question: { question: string, answer: string } | null = null;
  @Output() questionAdded = new EventEmitter<{ question: string, answer: string }>();
  @Output() close = new EventEmitter<void>();

  questionText: string = '';
  answerText: string = '';

  ngOnChanges() {
    if (this.question) {
      this.questionText = this.question.question;
      this.answerText = this.question.answer;
    } else {
      this.questionText = '';
      this.answerText = '';
    }
  }

  submitForm() {
    if (this.questionText && this.answerText) {
      this.questionAdded.emit({
        question: this.questionText,
        answer: this.answerText
      });
      this.close.emit();
    }
  }

  closeForm() {
    this.close.emit();
  }
}