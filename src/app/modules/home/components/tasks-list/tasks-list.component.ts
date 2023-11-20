import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../../../interfaces/task-list';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent implements DoCheck {
  public itemsTaskList: TaskList[] = [];

  ngDoCheck(): void {
    this.itemsTaskList.sort((a, b) => Number(a.checked) - Number(b.checked))
  }

  public setItemInTaskList(taskValue: string) {
    this.itemsTaskList.push({
      value: taskValue,
      checked: false,
    })
  }

  public removeAllTasks() {
    this.itemsTaskList = []
  }

  public deleteTask(index: number) {
    this.itemsTaskList.splice(index, 1)
  }

}
