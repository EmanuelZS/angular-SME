import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any [] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Principal', url: '/'},
        { titulo: 'OTs Activas', url: 'otsactivas'},
        { titulo: 'Eventos proximos', url: 'proxevents'},
        { titulo: 'Mensajes', url: 'inbox'},
      ]
    },
    {
      titulo: 'Edificios',
      icono: 'mdi mdi-bullseye',
      submenu: [
        { titulo: 'Por alfabeto', url: 'poralfabeto'},
        { titulo: 'Por zona', url: 'porzona'},
      ]
    },
    {
      titulo: 'Ordenes Trabajo',
      icono: 'mdi mdi-book-multiple',
      submenu: [
        { titulo: 'Generar OT', url: 'generate'},
        { titulo: 'Cancelar OT', url: 'cancel'},
        { titulo: 'Seguimiento OT', url: 'tracing'},
      ]
    },
    {
      titulo: 'Mensajes',
      icono: 'mdi mdi-email',
      submenu: [
        { titulo: 'Bandeja de entrada', url: 'inbox'},
        { titulo: 'Redactar correo', url: 'write'},
      ]
    },
    {
      titulo: 'Documentos',
      icono: 'mdi mdi-file',
      submenu: [
        { titulo: 'Rutinas', url: 'routines'},
        { titulo: 'Check lists', url: 'checklists'},
        { titulo: 'Normativas', url: 'regulations'},
      ]
    },
    {
      titulo: 'Insumos',
      icono: 'mdi mdi-widgets',
      submenu: [
        { titulo: 'Refacciones disponibles', url: 'spareparts'},
        { titulo: 'Herramienta', url: 'tools'},
        { titulo: 'Material', url: 'material'},
      ]
    },
    {
      titulo: 'Directorio técnicos',
      icono: 'mdi mdi-book-open-variant',
      submenu: [
        { titulo: 'Por alfabeto', url: 'alphabet'},
        { titulo: 'Por zona', url: 'zone'},
        { titulo: 'Por area de trabajo', url: 'workarea'},
      ]
    },
    {
      titulo: 'Gráficas',
      icono: 'mdi mdi-file-chart',
      submenu: [
        { titulo: 'Preventivo vs correctivo', url: 'pvsc'},
        { titulo: 'Costos', url: 'costs'},
        { titulo: 'Desempeño', url: 'performance'},
      ]
    },
    {
      titulo: 'Calendario',
      icono: 'mdi mdi-table',
      submenu: [
        { titulo: 'Por semana', url: 'week'},
        { titulo: 'Por mes', url: 'month'},
      ]
    },
    {
      titulo: 'Mapas',
      icono: 'mdi mdi-email',
      submenu: [
        { titulo: 'Mapa', url: 'map'},
        { titulo: 'Traslados', url: 'trip'},
      ]
    },
    {
      titulo: 'No rutinarios',
      icono: 'mdi mdi-arrange-send-backward',
      submenu: [
        { titulo: 'Emergencias', url: 'emergencies'},
        { titulo: 'Eventos', url: 'events'},
      ]
    },
  ];

  constructor() { }
}
