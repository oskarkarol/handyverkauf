import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ManufacturerComponent} from './view/manufacturer/manufacturer.component';
import {ModelsComponent} from './view/models/models.component';
import {VariantsComponent} from './view/variants/variants.component';
import {SaleComponent} from './view/sale/sale.component';
import {SuccessComponent} from './view/success/success.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manufacturer',
    pathMatch: 'full'
  },
  {
    path: 'manufacturer',
    component: ManufacturerComponent
  },
  {
    path: 'models/:manufacturerId',
    component: ModelsComponent
  },
  {
    path: 'variants/:manufacturerId/:modelId',
    component: VariantsComponent
  },
  {
    path: 'sale/:manufacturerId/:modelId/:variantId',
    component: SaleComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
