import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutofshelfComponent } from './outofshelf.component';

describe('OutofshelfComponent', () => {
  let component: OutofshelfComponent;
  let fixture: ComponentFixture<OutofshelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutofshelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutofshelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
