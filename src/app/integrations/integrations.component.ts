import { Component } from '@angular/core';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.css'
})
export class IntegrationsComponent {

  openVideo(): void {
    const youtubeUrl = 'https://www.youtube.com/watch?v=S9EgZmishEI&t=1s';
    window.open(youtubeUrl, '_blank');
  }

}
