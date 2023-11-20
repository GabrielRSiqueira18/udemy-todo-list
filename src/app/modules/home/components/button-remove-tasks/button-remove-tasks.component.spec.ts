import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRemoveTasksComponent } from './button-remove-tasks.component';

describe('ButtonRemoveTasksComponent', () => {
  let component: ButtonRemoveTasksComponent;
  let fixture: ComponentFixture<ButtonRemoveTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonRemoveTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonRemoveTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
