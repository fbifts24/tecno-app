import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url = 'http://localhost:3000/api/productos'

  constructor(private _httpClient: HttpClient) { }

  public obtenerProductosService(): Observable<Producto[]> {
    return this._httpClient.get<Producto[]>(this._url)
  }

  public obtenerProductoPorIdService(id: number | string): Observable<Producto> {
    return this._httpClient.get<Producto>(`${this._url}/${id}`)
  }

  public eliminarProductoService(id: number | string): Observable<Producto> {
    return this._httpClient.delete<Producto>(`${this._url}/${id}`)
  }

  
}
