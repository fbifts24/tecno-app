import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'products',
        loadComponent: () =>
            import('./pages/products/products.component')
        .then(m => m.ProductsComponent)
    },
    {
        path: 'products/create',
        loadComponent: () =>
            import('./pages/product-create/product-create.component')
        .then(m => m.ProductCreateComponent)
    },
    {
        path: 'products/:id',
        loadComponent: () =>
            import('./pages/product-detail/product-detail.component')
        .then(m => m.ProductDetailComponent)
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./pages/contact/contact.component')
        .then(m => m.ContactComponent)
    },
    {
        path: 'products/:id/update',
        loadComponent: () =>
            import('./pages/product-update/product-update.component')
        .then(m => m.ProductUpdateComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
