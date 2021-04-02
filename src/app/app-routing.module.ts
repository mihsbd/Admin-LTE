import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'products/all-products', component: ProductsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
