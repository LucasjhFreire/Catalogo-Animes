import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Favoritar } from './favoritar';

describe('Favoritar', () => {
  let component: Favoritar;
  let fixture: ComponentFixture<Favoritar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Favoritar],
    }).compileComponents();

    fixture = TestBed.createComponent(Favoritar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
