import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productos: Producto[] = []

  constructor(private _productService: ProductService){}

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos() {
    this._productService.obtenerProductosService().subscribe({
      next: data => this.productos = data,
      error: error => console.log(error)
    })
  }
}
