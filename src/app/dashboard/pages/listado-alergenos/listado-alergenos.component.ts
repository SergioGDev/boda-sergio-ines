import { Component, OnInit } from '@angular/core';
import { AlergenosService } from '../../../services/alergenos.service';
import { AlergenoSchema } from '../../../interfaces/datos.interfaces';

@Component({
  selector: 'app-listado-alergenos',
  templateUrl: './listado-alergenos.component.html',
  styleUrls: ['./listado-alergenos.component.css']
})
export class ListadoAlergenosComponent implements OnInit {

  cargando: boolean = false;
  listadoAlergenos: AlergenoSchema[] = [];

  constructor(
    private alergenosService: AlergenosService
  ) { }

  ngOnInit(): void {
    this.cargando = true;
    this.alergenosService.getListadoAlergenos().subscribe(
      listadoAlergenosResp => {
        this.listadoAlergenos = listadoAlergenosResp;
      }
    )

  }



}
