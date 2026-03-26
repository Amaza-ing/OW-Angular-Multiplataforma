import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskStoreService } from '../../services/task-store.service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  private taskStore = inject(TaskStoreService);

  title = '';

  addTask(): void {
    this.taskStore.addTask(this.title);
    this.title = '';
  }
}
