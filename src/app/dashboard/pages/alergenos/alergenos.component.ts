import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlergenosService } from 'src/app/services/alergenos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alergenos',
  templateUrl: './alergenos.component.html',
  styleUrls: ['./alergenos.component.css']
})
export class AlergenosComponent implements OnInit {

  alergenosForm = this.fb.group({
    nombre: [ '', [ Validators.required ]],
    descripcion: [ '', [ Validators.required ]],
  });

  duration: number = 4000;

  constructor(
    private fb: FormBuilder,
    private alergenosService: AlergenosService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.alergenosService.registrarDatosAlergenos(this.alergenosForm.value).then(
      () => {
        this.snackBar.open('Datos registrados correctamente', 'Cerrar', {
          duration: this.duration
          });
        this.alergenosForm.reset();
      }
    ).catch(
      (error) => {
        this.snackBar.open('Error al registrar los datos', 'Cerrar', {
          duration: this.duration
          });
      }
    )
  }

}
