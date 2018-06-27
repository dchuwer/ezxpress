import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusconnectionComponent } from './statusconnection.component';

describe('StatusconnectionComponent', () => {
  let component: StatusconnectionComponent;
  let fixture: ComponentFixture<StatusconnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusconnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
