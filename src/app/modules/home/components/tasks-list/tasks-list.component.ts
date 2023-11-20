import { Component } from '@angular/core';
import { TaskList } from '../../../../interfaces/task-list';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
  public itemsTaskList: TaskList[] = [];

  public setItemInTaskList(taskValue: string) {
    this.itemsTaskList.push({
      value: taskValue,
      checked: false,
    })
  }

  public removeAllTasks() {
    this.itemsTaskList = []
  }

}
