import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/models/product';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})

export class CrearProductoComponent implements OnInit{

  productoForm:FormGroup;
  titulo:string='Crear Producto';
  accion:string='Agregar';

  constructor( 
    private fb:FormBuilder, 
    private router:Router,
    private aRoute:ActivatedRoute,
    private toastr:ToastrService,
    private productoService:ProductoService
  ){
    this.productoForm=this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit(): void {

    if(this.aRoute.snapshot.params['id']){
      let id = this.aRoute.snapshot.params['id'];
      let producto:product;
      this.productoService.getProducto(id).subscribe(data=>{
        producto=data;
        this.productoForm.setValue({
          producto: producto.nombre,
          categoria: producto.categoria,
          ubicacion: producto.ubicacion,
          precio: producto.precio,
        })
      },error => {
        console.log(error);
      });
      this.titulo='Editar Producto';
      this.accion='Editar';
    }
  }

  agregarProducto():void {
    
    const PRODUCTO:product = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    }

    if(this.accion=='Agregar') {
      this.productoService.crearProducto(PRODUCTO).subscribe(data=>{
        this.toastr.info('Producto agregado con éxito', 'Producto registrado');
        this.router.navigate(['/']);
      }, error => {
        this.productoForm.reset();
        console.log(error);
      })
    }

    if(this.accion=='Editar'){
      let id = this.aRoute.snapshot.params['id'];
      this.productoService.updateProducto(id,PRODUCTO).subscribe(data=>{
        this.toastr.info('Producto editado con éxito', 'Producto actualizado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
      })
    }

  }





}
