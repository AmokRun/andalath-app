import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'horaires',
    loadChildren: () => import('./pages/horaires/horaires.module').then( m => m.HorairesPageModule)
  },
  {
    path: 'arret',
    loadChildren: () => import('./pages/arret/arret.module').then( m => m.ArretPageModule)
  },
  {
    path: 'bus',
    loadChildren: () => import('./pages/bus/bus.module').then( m => m.BusPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'tarifs',
    loadChildren: () => import('./pages/tarifs/tarifs.module').then( m => m.TarifsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
