import { Component, Input, OnInit } from '@angular/core';
import { MesaData, MesaSchema } from '../../../../interfaces/datos.interfaces';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() mesa!: MesaData;

  verReverso: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
