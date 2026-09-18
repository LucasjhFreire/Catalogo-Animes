import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarDetalhes } from './mostrar-detalhes';

describe('MostrarDetalhes', () => {
  let component: MostrarDetalhes;
  let fixture: ComponentFixture<MostrarDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarDetalhes],
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
