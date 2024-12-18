import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Apple MacBook Pro 16-inch",
      description: "High-performance laptop with M1 Pro chip.",
      price: 2499.99,
      imageUrl: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      category: "Laptops",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21 Ultra",
      description: "Flagship smartphone with advanced camera features.",
      price: 1199.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/517KxL6TCHL.__AC_SX300_SY300_QL70_ML2_.jpg",
      category: "Smartphones",
    },
    {
      id: 3,
      name: "Dell XPS 13",
      description: "Compact and powerful ultrabook with InfinityEdge display.",
      price: 1399.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/61CwSaEvRYL.__AC_SX300_SY300_QL70_ML2_.jpg",
      category: "Laptops",
    },
    {
      id: 4,
      name: "Apple iPad Pro 12.9-inch",
      description: "Versatile tablet with Liquid Retina XDR display.",
      price: 1099.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/61goypdjAYL.__AC_SX300_SY300_QL70_ML2_.jpg",
      category: "Tablets",
    },

    {
      id: 5,
      name: "Canon EOS R5",
      description: "Professional mirrorless camera with 8K video recording.",
      price: 3899.99,
      imageUrl:
        "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg",
      category: "Cameras",
    },
    {
      id: 6,
      name: "Microsoft Surface Pro 7",
      description: "2-in-1 laptop with touchscreen and detachable keyboard.",
      price: 899.99,
      imageUrl:
        "https://images.pexels.com/photos/5082571/pexels-photo-5082571.jpeg",
      category: "Tablets",
    },
    {
      id: 7,
      name: "Apple Watch Series 7",
      description: "Smartwatch with advanced health monitoring features.",
      price: 399.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/71aXGgNCE9L._AC_SX679_.jpg",
      category: "Wearables",
    },
    {
      id: 8,
      name: "Amazon Echo Dot (4th Gen)",
      description: "Smart speaker with Alexa voice assistant.",
      price: 49.99,
      imageUrl:
        "https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg",
      category: "Smart Home",
    },
    {
      id: 9,
      name: "Fitbit Charge 5",
      description: "Fitness tracker with built-in GPS and heart rate monitor.",
      price: 179.99,
      imageUrl:
        "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1530/2048x1365/filters:focal(1020x765:1021x766):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22864044/jpeters_210912_4757_0002.jpg",
      category: "Wearables",
    },
    {
      id: 10,
      name: "Nikon Z6 II",
      description: "Full-frame mirrorless camera with fast autofocus.",
      price: 1999.99,
      imageUrl:
        "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg",
      category: "Cameras",
    },
    {
      id: 11,
      name: "PlayStation 5",
      description: "Next-gen gaming console with immersive graphics.",
      price: 499.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/51dR+MAtBjL._AC_SX300_SY300_.jpg",
      category: "Gaming",
    },
    {
      id: 12,
      name: "DJI Mavic Air 2",
      description: "Compact drone with 4K camera and 34-minute flight time.",
      price: 799.99,
      imageUrl:
        "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg",
      category: "Drones",
    },
    {
      id: 13,
      name: "HP Envy 13",
      description:
        "Sleek laptop with powerful performance and long battery life.",
      price: 999.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/61uzkxbJ6KL.__AC_SX300_SY300_QL70_ML2_.jpg",
      category: "Laptops",
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find((product) => product.id === id));
  }
}
