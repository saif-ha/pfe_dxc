import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
 
  
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'insurance-form',
    loadChildren: () => import('./insurance-form/insurance-form.module').then( m => m.InsuranceFormPageModule)
  },
  {
    path: 'profile-form',
    loadChildren: () => import('./profile-form/profile-form.module').then( m => m.ProfileFormPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
