import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  tasks$: Observable<string[]> = this.tasks.asObservable();

  addTask(task: string): void {
    const currentTasks = this.tasks.getValue();
    this.tasks.next([...currentTasks, task]);
  }
}
