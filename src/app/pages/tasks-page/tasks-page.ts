import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { MobileHeader } from "../../components/mobile-header/mobile-header";

@Component({
  selector: 'app-tasks-page',
  imports: [IonContent, MobileHeader],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {}
