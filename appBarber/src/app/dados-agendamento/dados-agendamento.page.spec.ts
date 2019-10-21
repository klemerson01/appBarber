import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAgendamentoPage } from './dados-agendamento.page';

describe('DadosAgendamentoPage', () => {
  let component: DadosAgendamentoPage;
  let fixture: ComponentFixture<DadosAgendamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosAgendamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAgendamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
