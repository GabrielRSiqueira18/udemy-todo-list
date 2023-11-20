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
    this.itemsTaskList.sort((a, b) => Number(a.checked) - Number(b.checked));
  }

  public setItemInTaskList(taskValue: string) {
    this.itemsTaskList.push({
      value: taskValue,
      checked: false,
    })
  }

  public removeAllTasks() {
    this.itemsTaskList = [];
  }

  public deleteTask(index: number) {
    this.itemsTaskList.splice(index, 1);
  }

  public validValue(value: string, index: number) {
    if(!value) {
      const confirmDeleteItem = window.confirm("Deseja realmente deletar a task?");

      if(confirmDeleteItem) {
        this.itemsTaskList.splice(index, 1)
      } else {
        do {
          const newValueTask = window.prompt("Digite o novo valor da task")!
          this.itemsTaskList[index].value = newValueTask
        } while(!this.itemsTaskList[index].value)
      }
    }
  }

}
