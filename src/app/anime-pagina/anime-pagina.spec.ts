import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimePagina } from './anime-pagina';

describe('AnimePagina', () => {
  let component: AnimePagina;
  let fixture: ComponentFixture<AnimePagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimePagina],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimePagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
