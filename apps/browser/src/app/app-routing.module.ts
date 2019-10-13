import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './package/search/search.component';
import { PackageJsonSelectorComponent } from './settings/package-json-selector/package-json-selector.component';
import { SelectedPackageJsonGuard } from './guards/selected-package-json.guard';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    canActivate: [SelectedPackageJsonGuard]
  },
  {
    path: 'package-json-select',
    component: PackageJsonSelectorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
