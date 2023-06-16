import { Component, HostListener, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { MesaData, InvitadoData } from '../../../interfaces/datos.interfaces';

import { MesasFireService } from 'src/app/services/mesas-fire.service';

@Component({
  selector: 'app-distribucion-mesas',
  templateUrl: './distribucion-mesas.component.html',
  styleUrls: ['./distribucion-mesas.component.css', './card.component.css']
})
export class DistribucionMesasComponent implements OnInit {

  vMesas: MesaData[] = [];
  vMesasMostradas: MesaData[] = [];
  vInvitados: InvitadoData[] = [];

  cargandoDatos: boolean = false;
  textoBusqueda: string = '';

  anchoPantalla: number = 0;
  acentos = [
    { conTilde: 'á', sinTilde: 'a' },
    { conTilde: 'é', sinTilde: 'e' },
    { conTilde: 'í', sinTilde: 'i' },
    { conTilde: 'ó', sinTilde: 'o' },
    { conTilde: 'ú', sinTilde: 'u' },
    { conTilde: 'Á', sinTilde: 'A' },
    { conTilde: 'É', sinTilde: 'E' },
    { conTilde: 'Í', sinTilde: 'I' },
    { conTilde: 'Ó', sinTilde: 'O' },
    { conTilde: 'Ú', sinTilde: 'U' },
  ]

  constructor(
    private mesasFireService: MesasFireService
  ) { }

  ngOnInit(): void {
    this.anchoPantalla = window.innerWidth;
    this.cargandoDatos = true;
    this.vMesas = [];
    this.vInvitados = [];
    
    this.mesasFireService.getMesasHeroesData().pipe(
      switchMap( respMesasHeroes => {
        this.vMesas = respMesasHeroes;
        this.vMesas.forEach((mesa: MesaData) => mesa.vInvitados = [])

        this.vMesasMostradas = respMesasHeroes;
        return this.mesasFireService.getVInvitados();
      }
      )).subscribe( async (respVInvitados) => {
        this.vInvitados = respVInvitados;
        
        this.vInvitados.forEach( (invitado: InvitadoData) => {
          this.vMesas.find( (mesa: MesaData) => mesa.heroeId === invitado.nombreMesa)!.vInvitados!.push(invitado)
        })

        // Ordenamos las mesas y los invitados de cada mesa
        this.vMesas.sort( (a: MesaData, b: MesaData) => a.orden! > b.orden! ? 1 : -1) 
        this.vMesas.forEach( (mesa: MesaData) => {
          mesa.vInvitados?.sort( (a: InvitadoData, b: InvitadoData) => a.orden > b.orden ? 1 : -1)
        })
        
        this.cargandoDatos = false;
    })

  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any): any {
    this.anchoPantalla = event.target.innerWidth;
  }

  aplicarBusqueda(busqueda: string) {
    this.textoBusqueda = busqueda;
    this.vMesasMostradas = this.vMesas.filter((mesa: MesaData) => {
      const vAux = mesa.vInvitados!.map(invitado => invitado.nombre.toLowerCase());
      return vAux.some(invitado => this.cumpleCriteriosBusqueda(invitado, busqueda));
    });
  }

  cumpleCriteriosBusqueda(invitado: string, busqueda: string) {
    switch (invitado) {
      // case 'miriam':
      //   console.log('entra en miriam')
      //   const vRubia: string[] = ['r', 'ru', 'rub', 'rubi', 'rubia'];
      //   return vRubia.includes(busqueda.toLowerCase())
      //     || invitado.toLowerCase().includes(busqueda.toLowerCase())
      //     || this.coincideSinTildes(invitado, busqueda);

      // case 'bea':
      //   console.log('entra en bea')
      //   const vBusti: string[] = ['b', 'be', 'bea', 'beat', 'beatr', 'beatri', 'beatriz']
      //   return vBusti.includes(busqueda.toLowerCase())
      //     || invitado.toLowerCase().includes(busqueda.toLowerCase())
      //     || this.coincideSinTildes(invitado, busqueda);

      //     case 'joaquin':
      //       console.log('entra en joaquín')
      //       const vLizana: string[] = ['l', 'li', 'liz', 'liza', 'lizan', 'lizana']
      //       return vLizana.includes(busqueda.toLowerCase())
      //     || invitado.toLowerCase().includes(busqueda.toLowerCase())
      //     || this.coincideSinTildes(invitado, busqueda)

      default:
        return invitado.toLowerCase().includes(busqueda.toLowerCase()) || this.coincideSinTildes(invitado, busqueda);
    }
  }

  coincideSinTildes(invitado: string, busqueda: string) {
    var invSinTildes: string = invitado;
    var busquedaSinTildes: string = busqueda;

    this.acentos.forEach(item => {
      invSinTildes = invSinTildes.replace(item.conTilde, item.sinTilde);
      busquedaSinTildes = busquedaSinTildes.replace(item.conTilde, item.sinTilde);
    })
    return invSinTildes.toLowerCase().includes(busquedaSinTildes.toLowerCase());
  }

}
