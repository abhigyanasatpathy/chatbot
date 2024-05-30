import { Component } from '@angular/core';
import { AudioService } from './audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'g';
  sidebarOpen: boolean = false;

  constructor(private audioService: AudioService) {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    if (this.sidebarOpen) {
      this.audioService.playToggleOpenSound(); // Play sound when opening sidebar
    } else {
      this.audioService.playToggleCloseSound(); // Play sound when closing sidebar
    }
  }
}
