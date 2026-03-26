import { Component, input, output } from '@angular/core';
import { Task } from '../../Models/task.model';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  task = input.required<Task>();

  toggleRequested = output<number>();
}
