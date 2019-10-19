import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPrincipalPage } from './tela-principal.page';

describe('TelaPrincipalPage', () => {
  let component: TelaPrincipalPage;
  let fixture: ComponentFixture<TelaPrincipalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaPrincipalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
