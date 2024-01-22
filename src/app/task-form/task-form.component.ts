import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  template: `
    <div>
      <h2>Add Task</h2>
      <input [(ngModel)]="newTask" placeholder="Enter task" />
      <button (click)="addTask()">Add</button>
    </div>
  `,
  styles: []
})
export class TaskFormComponent {
  newTask = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }
}
