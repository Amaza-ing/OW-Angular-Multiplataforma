import { Component, inject } from '@angular/core';
import { TaskItem } from '../task-item/task-item';
import { TaskStoreService } from '../../services/task-store.service';

@Component({
  selector: 'app-task-list',
  imports: [TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskStore = inject(TaskStoreService);
}
