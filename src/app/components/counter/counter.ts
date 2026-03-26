import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  // standalone: true
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.log('El contador ha cambiado: ', this.count());
    });
  }

  increment() {
    this.count.update((value) => value + 1);
  }

  decrement() {
    this.count.update((value) => value - 1);
  }
}
