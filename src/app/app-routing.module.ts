import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
    },
    {
        path: '',
        loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
    },
    /* {
    path: 'tabs-menu',
    loadChildren: () => import('./assignment/tabs-menu/tabs-menu.module').then( m => m.TabsMenuPageModule)
  }, */
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
