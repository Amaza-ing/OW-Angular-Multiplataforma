import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { MobileHeader } from '../../components/mobile-header/mobile-header';

@Component({
  selector: 'app-about',
  imports: [IonContent, MobileHeader],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
