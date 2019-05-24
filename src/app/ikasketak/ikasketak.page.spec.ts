import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IkasketakPage } from './ikasketak.page';

describe('IkasketakPage', () => {
  let component: IkasketakPage;
  let fixture: ComponentFixture<IkasketakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IkasketakPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IkasketakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
