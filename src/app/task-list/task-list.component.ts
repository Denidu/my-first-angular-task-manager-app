import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  template: `
    <h2>Task List</h2>
    <ul>
      <li *ngFor="let task of tasks$ | async">{{ task }}</li>
    </ul>
  `,
  styles: []
})
export class TaskListComponent implements OnInit {
  tasks$ = this.taskService.tasks$;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
}
