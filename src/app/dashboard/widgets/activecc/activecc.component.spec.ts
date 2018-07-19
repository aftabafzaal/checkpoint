import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveccComponent } from './activecc.component';

describe('ActiveccComponent', () => {
  let component: ActiveccComponent;
  let fixture: ComponentFixture<ActiveccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
