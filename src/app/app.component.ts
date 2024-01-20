import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'static-angular-app-on-render';
  audio: HTMLAudioElement | null = null;

  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      this.audio = document.getElementById('myAudio') as HTMLAudioElement;
      if (this.audio) {
        this.audio.play();
      }
    });
  }

  
}
