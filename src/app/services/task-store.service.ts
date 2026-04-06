import { computed, effect, Injectable, signal } from '@angular/core';
import { Task } from '../Models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskStoreService {
  private storageKey = 'tasks';
  private storedTasks = localStorage.getItem(this.storageKey);
  private initialTasks: Task[] = this.storedTasks
    ? JSON.parse(this.storedTasks)
    : [
        {
          id: 1,
          title: 'Crear proyecto',
          completed: true,
        },
        {
          id: 2,
          title: 'Añadir componentes y servicios',
          completed: false,
        },
      ];

  tasks = signal<Task[]>(this.initialTasks);

  private nextId = this.tasks().length + 1;

  totalTasks = computed(() => this.tasks().length);

  completedTasks = computed(() => this.tasks().filter((task) => task.completed).length);

  pendingTasks = computed(() => this.totalTasks() - this.completedTasks());

  constructor() {
    effect(() => {
      localStorage.setItem(this.storageKey, JSON.stringify(this.tasks()));
    });
  }

  addTask(title: string): void {
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    const newTask: Task = {
      id: this.nextId++,
      title,
      completed: false,
    };

    this.tasks.update((currentTasks) => [...currentTasks, newTask]);
  }

  toggleTask(id: number): void {
    this.tasks.update((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  }
}
