import { Component } from '@angular/core';
import { TaskForm } from "../../components/task-form/task-form";
import { TaskList } from "../../components/task-list/task-list";
import { IonHeader, IonToolbar, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tasks-page',
  imports: [TaskForm, TaskList, IonHeader, IonToolbar, IonContent],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {

}
