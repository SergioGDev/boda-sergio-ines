import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlergenosComponent } from './listado-alergenos.component';

describe('ListadoAlergenosComponent', () => {
  let component: ListadoAlergenosComponent;
  let fixture: ComponentFixture<ListadoAlergenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAlergenosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoAlergenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
