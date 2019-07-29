import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupfindPage } from './supfind.page';

describe('SupfindPage', () => {
  let component: SupfindPage;
  let fixture: ComponentFixture<SupfindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupfindPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupfindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
