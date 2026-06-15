import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-product-update',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {
  producto: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    imagen: ''
  }

  nombre = ''
  descripcion = ''
  precio = ''
  stock = ''
  imagen = ''

  precioInvalido = false
  stockInvalido = false

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      {
        next: params => {
          const ID = Number(params['id'])

          this._productService.obtenerProductoPorIdService(ID).subscribe(
            {
              next: data => this.producto = data,

              error: error => console.log(error)
            }
          )
        },
        error: error => console.log(error)
      })
  }

  actualizarProductoPATCH() {
    if (!this.producto.id) {
      return
    }

    const DATOS: Partial<Producto> = {}

    if (this.nombre.trim() !== '') {
      DATOS.nombre = this.nombre
    }

    if (this.descripcion.trim() !== '') {
      DATOS.descripcion = this.descripcion
    }

    if (this.precio.trim() !== '') {
      DATOS.precio = Number(this.precio)
    }

    if (this.stock.trim() !== '') {
      DATOS.stock = Number(this.stock)
    }

    if (this.imagen.trim() !== '') {
      DATOS.imagen == this.imagen
    }

    if (Object.keys(DATOS).length === 0) {
      console.log('No hay datos para actualizar')
      return
    }

    this._productService.actualizarParteProductoService(this.producto.id, DATOS).subscribe(
      {
        next: productoActualizado => {
          console.log('Producto actualizado: ', productoActualizado)
          this._router.navigate(['/products'])
        },
        error: error => console.log(error)
      }
    )
  }

  validarNumeroPositivo(valor: string): boolean {
    if (valor.trim() === '') {
      return false
    }

    const NUMERO = Number(valor)

    return isNaN(NUMERO) || NUMERO < 0
  }

  validarPrecio() {
    this.precioInvalido = this.validarNumeroPositivo(this.precio)
  }

  validarStock() {
    this.stockInvalido = this.validarNumeroPositivo(this.stock)
  }

  formularioVacio(): boolean {
    return (
      this.nombre.trim() === '' &&
      this.descripcion.trim() === '' &&
      this.precio.trim() === '' &&
      this.stock.trim() === '' &&
      this.imagen.trim() === ''
    )
  }

  actualizarProductoPUT() {
    if (!this.producto.id) {
      return
    }

    this._productService.actualizarProuctoService(this.producto.id, this.producto).subscribe(
      {
        next: productoActualizado => {
          console.log('Producto actualizado: ', productoActualizado)
          this._router.navigate(['/products'])
        },
        error: error => console.log(error)
      }
    )
  }
}
