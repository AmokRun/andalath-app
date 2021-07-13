import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/accueil', icon: 'home' },
    { title: 'Horaires', url: '/horaires', icon: 'alarm' },
    { title: 'Bus', url: '/bus', icon: 'bus' },
    { title: 'Arrêts', url: '/arret', icon: 'analytics' },
    { title: 'Tarifs', url: '/tarifs', icon: 'wallet' },
    { title: 'A propos', url: '/about', icon: 'alert-circle' },
    { title: 'Contact', url: '/contact', icon: 'mail' },
  ];
   constructor() {}
}
