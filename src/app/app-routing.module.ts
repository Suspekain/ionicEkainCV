import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'ikasketak', loadChildren: './ikasketak/ikasketak.module#IkasketakPageModule' },
  { path: 'lanesperientzia', loadChildren: './lanesperientzia/lanesperientzia.module#LanesperientziaPageModule' },
  { path: 'hizkuntzak', loadChildren: './hizkuntzak/hizkuntzak.module#HizkuntzakPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
