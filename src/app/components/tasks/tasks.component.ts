import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Task } from '../../classes/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

}
