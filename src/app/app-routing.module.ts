import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

const routes: Routes = [
  {path:'', component: ListProductsComponent},
  {path:'crear-producto', component:CrearProductoComponent},
  {path:'editar-producto/:id', component:CrearProductoComponent},
  {path:'**', redirectTo: '', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
