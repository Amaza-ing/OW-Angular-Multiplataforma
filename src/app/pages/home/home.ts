import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { MobileHeader } from "../../components/mobile-header/mobile-header";

@Component({
  selector: 'app-home',
  imports: [IonContent, IonButton, RouterLink, MobileHeader],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
