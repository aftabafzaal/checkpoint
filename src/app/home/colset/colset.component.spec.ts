import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColsetComponent } from './colset.component';

describe('ColsetComponent', () => {
  let component: ColsetComponent;
  let fixture: ComponentFixture<ColsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
