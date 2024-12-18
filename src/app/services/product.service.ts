import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Smartphone X',
      description: 'Latest smartphone with advanced features',
      price: 999.99,
      imageUrl: 'https://picsum.photos/400/300?random=1',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Laptop Pro',
      description: 'High-performance laptop for professionals',
      price: 1499.99,
      imageUrl: 'https://picsum.photos/400/300?random=2',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      description: 'Premium sound quality with noise cancellation',
      price: 299.99,
      imageUrl: 'https://picsum.photos/400/300?random=3',
      category: 'Electronics'
    },
    {
      id: 4,
      name: 'Smart Watch',
      description: 'Track your fitness and stay connected',
      price: 199.99,
      imageUrl: 'https://picsum.photos/400/300?random=4',
      category: 'Electronics'
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}