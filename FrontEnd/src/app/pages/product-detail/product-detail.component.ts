import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  producto?: Producto

  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      {
        next: param => this._productService.obtenerProductoPorIdService(param['id']).subscribe(
          {
            next: data => this.producto = data,

            error: error => console.log(error)
          }
        ),
        error: error => console.log(error)
      }
    )
  }

  eliminarProducto() {
    const ID = this.producto?.id

    if(!ID) {
      return
    }

    this._productService.eliminarProductoService(ID).subscribe(
      {
        next: (producoEliminado) => {
          
          console.log(producoEliminado.nombre)
          
          this._router.navigate(['/products'])
        
        },
        error: error => console.log(error)
      }
    )
  }

}
