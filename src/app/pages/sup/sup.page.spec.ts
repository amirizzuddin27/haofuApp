import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupPage } from './sup.page';

describe('SupPage', () => {
  let component: SupPage;
  let fixture: ComponentFixture<SupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
