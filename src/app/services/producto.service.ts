import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product';
import { HtmlParser } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private API_URL = 'http://localhost:4000/api/productos/'

  constructor(private http:HttpClient) { }

  getProductos():Observable<product[]>{
    return this.http.get<product[]>(this.API_URL);
  }
  
  getProducto(id:string):Observable<any>{
    return this.http.get<any>(this.API_URL+id);
  }
  
  crearProducto(producto:product):Observable<any>{
    return this.http.post(this.API_URL, producto);
  }

  deleteProducto(id:string):Observable<any>{
    return this.http.delete(this.API_URL + id);
  }

  updateProducto(id:string, producto:product):Observable<any>{
    return this.http.put<any>(this.API_URL+id, producto);
  }

}
