import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanesperientziaPage } from './lanesperientzia.page';

describe('LanesperientziaPage', () => {
  let component: LanesperientziaPage;
  let fixture: ComponentFixture<LanesperientziaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanesperientziaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanesperientziaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
