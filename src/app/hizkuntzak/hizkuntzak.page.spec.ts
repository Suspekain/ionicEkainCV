import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HizkuntzakPage } from './hizkuntzak.page';

describe('HizkuntzakPage', () => {
  let component: HizkuntzakPage;
  let fixture: ComponentFixture<HizkuntzakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HizkuntzakPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HizkuntzakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
