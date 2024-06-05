// audio.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private toggleOpenSound = new Audio('/assets/sound/toggle-on.mp3');
  private toggleCloseSound = new Audio('/assets/sound/toggle-off.mp3');

  playToggleOpenSound() {
    this.toggleOpenSound.play();
  }

  playToggleCloseSound() {
    this.toggleCloseSound.play();
  }
}
