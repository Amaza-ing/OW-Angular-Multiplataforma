import { Component, signal } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { Task } from './Models/task.model';

@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private nextId = 3;

  tasks = signal<Task[]>([
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
  ]);

  addTask(title: string): void {
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
