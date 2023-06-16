import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { GaleriaComponent } from './pages/galeria/galeria.component';
import { GestionInvitadosComponent } from './pages/gestion-invitados/gestion-invitados.component';
import { DistribucionMesasComponent } from './pages/distribucion-mesas/distribucion-mesas.component';
import { UbicacionesComponent } from './pages/ubicaciones/ubicaciones.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { LoadCsvComponent } from './components/load-csv/load-csv.component';
import { MaterialModule } from '../material/material.module';
import { SpinnerCargaComponent } from './components/spinner-carga/spinner-carga.component';
import { InputBusquedaComponent } from './pages/distribucion-mesas/input-busqueda/input-busqueda.component';
import { TarjetaComponent } from './pages/distribucion-mesas/tarjeta/tarjeta.component';
import { AlergenosComponent } from './pages/alergenos/alergenos.component';
import { ListadoAlergenosComponent } from './pages/listado-alergenos/listado-alergenos.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NuestraHistoriaComponent } from './pages/nuestra-historia/nuestra-historia.component';



@NgModule({
  declarations: [
    GaleriaComponent,
    GestionInvitadosComponent,
    DistribucionMesasComponent,
    UbicacionesComponent,
    MenuLateralComponent,
    LoadCsvComponent,
    SpinnerCargaComponent,
    InputBusquedaComponent,
    TarjetaComponent,
    AlergenosComponent,
    ListadoAlergenosComponent,
    NuestraHistoriaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class DashboardModule { }
