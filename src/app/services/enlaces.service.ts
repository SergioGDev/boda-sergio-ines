import { Injectable } from '@angular/core';
import { Option } from '../interfaces/dashboard.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EnlacesService {

  constructor() { }

  getOpcionesConfiguracion(): Option[] {
    return [
      // { text: 'Galería', path: '/dashboard/galeria', icono: 'photo_camera' },
      // { text: 'Gestión invitados', path: '/dashboard/gestion-invitados', icono: 'person_outline' },
      { text: 'Ubicaciones', path: '/ubicaciones', icono: 'my_location' },
      // { text: 'Invitados', path: '/distribucion-mesas', icono: 'restaurant' },
      { text: 'Alergenos', path: '/alergenos', icono: 'restaurant' }, 
      { text: 'Nuestra historia', path: '/nuestra-historia', icono: 'restaurant' }, 
      { text: 'Alojamiento', path: '/alojamiento', icono: 'restaurant' }, 
      // { text: 'Logout', path: '/inicio', icono: 'highlight_off' },
    ]
  }
}
