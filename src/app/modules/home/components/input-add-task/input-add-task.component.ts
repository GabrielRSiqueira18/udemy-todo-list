import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-task',
  templateUrl: './input-add-task.component.html',
  styleUrl: './input-add-task.component.scss'
})
export class InputAddTaskComponent {
  @Output() emitAddTaskValue = new EventEmitter();

  public taskValue: string = "";

  public addTaskValue() {
    const taskValueFormated = this.taskValue.trim();

    if(taskValueFormated) {
      this.emitAddTaskValue.emit(this.taskValue);
      this.taskValue = "";
    }
  }
}
