import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {
  filterAndSort(products: Product[], searchTerm: string, sortBy: string): Product[] {
    let filtered = this.filterProducts(products, searchTerm);
    return this.sortProducts(filtered, sortBy);
  }

  private filterProducts(products: Product[], searchTerm: string): Product[] {
    if (!searchTerm) return products;
    
    const term = searchTerm.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  }

  private sortProducts(products: Product[], sortBy: string): Product[] {
    return [...products].sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      }
      return a.name.localeCompare(b.name);
    });
  }
}