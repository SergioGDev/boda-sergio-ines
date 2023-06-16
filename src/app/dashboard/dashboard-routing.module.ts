import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { DistribucionMesasComponent } from './pages/distribucion-mesas/distribucion-mesas.component';
import { UbicacionesComponent } from './pages/ubicaciones/ubicaciones.component';
import { AlergenosComponent } from './pages/alergenos/alergenos.component';
import { ListadoAlergenosComponent } from './pages/listado-alergenos/listado-alergenos.component';
import { NuestraHistoriaComponent } from './pages/nuestra-historia/nuestra-historia.component';
import { AlojamientosComponent } from './pages/alojamientos/alojamientos.component';
import { GestionInvitadosComponent } from './pages/gestion-invitados/gestion-invitados.component';

const routes: Routes = [
    {
        path: '',
        component: MenuLateralComponent,
        children: [
            // { path: 'galeria', component: GaleriaComponent },
            // { path: 'distribucion-mesas', component: DistribucionMesasComponent },
            { path: 'alergenos', component: AlergenosComponent },
            { path: 'listado-alergenos', component: ListadoAlergenosComponent },
            { path: 'nuestra-historia', component: NuestraHistoriaComponent },
            { path: 'alojamiento', component: AlojamientosComponent },
            //{ path: 'gestion-invitados', component: GestionInvitadosComponent },
            { path: 'ubicaciones', component: UbicacionesComponent },
            { path: '**', redirectTo: 'ubicaciones' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
