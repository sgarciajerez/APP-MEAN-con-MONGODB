import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/models/product';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products:product[] = [];

  constructor(
    private productoService:ProductoService,
    private toastr: ToastrService
    ) {    
  }

  ngOnInit(): void {
      this.getProductos();
  }

  getProductos():void {
    this.productoService.getProductos().subscribe(data =>{
      this.products=data;
    }, error => {
      console.log(error);
    }
    )
  }

  eliminarProducto(id:any){
    this.productoService.deleteProducto(id).subscribe(data => {
      this.toastr.error(data.message, 'Producto Eliminado');
      this.getProductos();
    }, error => {
      console.log(error);
    })
  }

}
