import { Component, inject, input } from '@angular/core';
import { Task } from '../../Models/task.model';
import { TaskStoreService } from '../../services/task-store.service';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  private taskStore = inject(TaskStoreService);

  task = input.required<Task>();

  toggleTask(): void {
    this.taskStore.toggleTask(this.task().id);
  }
}
