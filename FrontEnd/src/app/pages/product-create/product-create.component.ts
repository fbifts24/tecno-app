import { Component } from '@angular/core';
import { Producto } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

  producto: Producto = {
    nombre: '',
    descripcion:'',
    precio: 0,
    stock: 0,
    imagen:''
  }

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  crearProducto() {
    this._productService.crearProductoService(this.producto).subscribe(
      {
        next: productoCreado => {
          
          console.log('Producto creado: ', productoCreado)

          this._router.navigate(['/products'])
        },
        error: error => console.log(error)
      }
    )
  }
}
