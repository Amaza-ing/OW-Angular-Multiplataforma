import { Component, NgZone, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private ngZone: NgZone) {}

  platform = signal('Desconocido');

  async loadPlatform() {
    const result = await window.electronAPI.getPlatform();
    this.platform.set(result);
  }
}
