import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ProductListComponent } from './app/components/product-list/product-list.component';
import { ProductDetailComponent } from './app/components/product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `
})
export class App {
  name = 'Angular Shop';
}

const routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
}).catch(err => console.error(err));