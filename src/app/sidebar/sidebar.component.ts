import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  languages: string[] = [
    'Afrikaans', 'Albanian', 'Amharic', 'Arabic', 'Armenian', 'Azerbaijani',
    'Basque', 'Belarusian', 'Bengali', 'Bosnian', 'Bulgarian', 'Catalan',
    'Cebuano', 'Chichewa', 'Chinese', 'Danish',
    'Dutch', 'English',  'French',
    'Frisian', 'Galician', 'Georgian', 'German', 'Greek', 'Gujarati', 'Haitian Creole',
     'Hindi', 'Hmong', 'Hungarian', 'Icelandic', 'Igbo',
    'Indonesian', 'Irish', 'Italian', 'Japanese', 'Javanese', 'Kannada', 'Kazakh',
     'Latin', 'Latvian',
     'Malayalam', 'Maltese',
    'Maori', 'Marathi', 'Mongolian', 'Myanmar (Burmese)', 'Nepali', 'Norwegian', 'Odia (Oriya)',
    'Pashto', 'Persian', 'Polish', 'Portuguese', 'Punjabi', 'Romanian', 'Russian', 'Samoan',
     'Swahili', 'Swedish', 'Tajik', 'Tamil', 'Tatar', 'Telugu',
    'Thai', 'Turkish', 'Turkmen', 'Ukrainian', 'Urdu', 
    'Xhosa', 'Yiddish', 'Yoruba', 'Zulu'
  ];
  languagesInRows: string[][] = [];

  constructor() {
    this.initializeLanguageGrid();
  }

  initializeLanguageGrid() {
    let rowIndex = 0;
    for (let i = 0; i < this.languages.length; i += 9) {
      this.languagesInRows[rowIndex] = this.languages.slice(i, i + 9);
      rowIndex++;
    }
  }

  openLanguageModal() {
    const modal = document.getElementById('languageModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeLanguageModal() {
    const modal = document.getElementById('languageModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
