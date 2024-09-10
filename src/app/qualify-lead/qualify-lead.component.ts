import { Component } from '@angular/core';

@Component({
  selector: 'app-qualify-lead',
  templateUrl: './qualify-lead.component.html',
  styleUrls: ['./qualify-lead.component.css']
})
export class QualifyLeadComponent {
  isModalOpen = false;
  isSuccessPopupOpen = false;
  isLeadInsightsEnabled = false; // Track the toggle state
  showEnablePopup = false; // Popup when toggle is on
  showDisablePopup = false; // Popup when toggle is off
  
  // This array will store the questions data
  questions = [
    { question: 'What use cases do you have in mind with our product?', enabled: false },
    { question: 'What is your email address?', enabled: false },
  ];

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  // Method to handle the toggle switch
  toggleLeadInsights() {
    this.isLeadInsightsEnabled = !this.isLeadInsightsEnabled;

    if (this.isLeadInsightsEnabled) {
      this.showEnablePopup = true;
      this.showDisablePopup = false;
    } else {
      this.showDisablePopup = true;
      this.showEnablePopup = false;
    }

    // Automatically close the popups after 2 seconds
    setTimeout(() => {
      this.showEnablePopup = false;
      this.showDisablePopup = false;
    }, 2000);
  }

  // Method to handle adding a new row
  addQuestion() {
    this.questions.push({ question: '', enabled: false });
  }

  // Method to handle deleting a row
  deleteQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  // Method to save changes and show success popup
  saveChanges() {
    this.isSuccessPopupOpen = true;

    setTimeout(() => {
      this.isSuccessPopupOpen = false;
    }, 2000);
  }
}
