import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { MobileHeader } from "../../components/mobile-header/mobile-header";
import { TaskForm } from "../../components/task-form/task-form";
import { TaskList } from "../../components/task-list/task-list";

@Component({
  selector: 'app-tasks-page',
  imports: [IonContent, MobileHeader, TaskForm, TaskList],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {}
