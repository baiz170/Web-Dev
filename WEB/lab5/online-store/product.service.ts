import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Category } from './category.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Playstation' },
  ];

  private products: Product[] = [
    { id: 1, name: 'iPhone 17', description: 'Apple iPhone 17', price: 620000, rating: 4.8,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p14/pa5/64165039.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p54/pa2/64165043.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pd6/p0c/64462383.jpg?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/?c=750000000', likes:0, categoryId:1 },

    { id: 2, name: 'Apple iPhone 15', description: 'Apple iPhone 15', price: 404887, rating: 4.7,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000', likes:0, categoryId:1 },
    
    { id: 3, name: 'Apple iPhone 13', description: 'Apple iPhone 13', price: 350000, rating: 4.9,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000', likes:0, categoryId:1 },
    
    { id: 4, name: 'Samsung Galaxy A07', description: 'Samsung Galaxy A07', price: 70000, rating: 4,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p0c/pd7/61291243.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p61/pd7/61291246.jpg?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000', likes:0, categoryId:1 },
    
    { id: 5, name: 'Apple iPhone 16', description: 'Apple iPhone 16', price: 490000, rating: 4.8,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000', likes:0, categoryId:1 },

    
    
    
    { id: 6, name: 'Apple MacBook Air 13 2020 ', description: 'Apple laptop', price: 440000, rating: 4.4,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000', likes:0, categoryId:2 },
      
    { id: 7, name: 'PRYME N5095 15.6"', description: 'PRYME N5095 15.6"', price: 190000, rating: 4.6,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pd2/pfa/45122462.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pb6/pfa/45122463.jpg?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=750000000', likes:0, categoryId:2 },

    { id: 8, name: 'Apple MacBook Air 13 2025', description: 'Apple laptop', price: 700000, rating: 4.9,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000', likes:0, categoryId:2 },
     
    { id: 9, name: 'ASUS TUF A15 FA506 15.6', description: 'ASUS laptop', price: 480000, rating: 4.8,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pf6/p03/72613217.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7c/p07/72613228.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p59/p0a/72613233.png?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/asus-tuf-a15-fa506-15-6-16-gb-ssd-512-gb-bez-os-90nr0jf7-m00je0-148010487/?c=750000000', likes:0, categoryId:2 },  

    { id: 10, name: 'Apple MacBook Pro 16 2024 16.2"', description: 'Apple laptop', price: 1880000, rating: 5,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p2c/pb7/15675993.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p48/pb7/15675994.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p65/pb7/15675995.png?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-16-2-48-gb-ssd-512-gb-macos-mx2y3ru-a-132141367/?c=750000000', likes:0, categoryId:2 },

    

    
    { id: 11, name: 'Apple AirPods 4', description: 'Good 4 u', price: 60000, rating: 5,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000', likes:0, categoryId:3 },
    
    { id: 12, name: 'HyperX Cloud II', description: 'Noise cancelling', price: 24900, rating: 4.2,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h72/he2/63770832764958.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h33/hb1/63770833649694.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h5a/h48/63770834305054.jpg?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/naushniki-hyperx-cloud-ii-cherno-krasnyi-4800107/?c=750000000', likes:0, categoryId:3 },

    { id: 13, name: 'Apple AirPods Max 2', description: 'I cannot hear u', price: 277000, rating: 4.9,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p96/p5e/3537740.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7a/p5e/3537741.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p5e/p5e/3537742.png?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-sinii-128625122/?c=750000000', likes:0, categoryId:3 },    

    { id: 14, name: 'Marshall Major V', description: 'WOW', price: 41000, rating: 4.8,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pbb/p86/32893179.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p27/p89/32893180.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p44/p89/32893181.png?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/naushniki-marshall-major-v-bezhevyi-129797584/?c=750000000', likes:0, categoryId:3 },

    { id: 15, name: 'Sony WH-1000XM5', description: 'Sony', price: 130000, rating: 4.3,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h22/h56/64476310306846.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7d/pa4/10606242.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p9a/pa4/10606243.jpg?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-serebristyi-105577599/?c=750000000', likes:0, categoryId:3 },






    { id: 16, name: 'Sony PlayStation 5 Slim', description: 'The dream', price: 303000, rating: 5,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000', likes:0, categoryId:4 },

    { id: 17, name: 'Sony PS5 DualSense ', description: 'You really need this', price: 38000, rating: 4.2,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pd2/p92/34376406.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p0a/p93/34376408.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p93/p95/34376410.jpg?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/sony-ps5-dualsense-chernyi-101662437/?c=750000000', likes:0, categoryId:4 },   
    
    { id: 18, name: 'F1 25 PS5', description: 'I am stupid', price: 42000, rating: 4.5,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pc8/pa8/56874856.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pe4/pa8/56874857.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p00/pa9/56874858.png?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/f1-25-ps5-143604881/?c=750000000', likes:0, categoryId:4 }, 

    { id: 19, name: 'FC 26 PS5', description: 'Same every year', price: 25000, rating: 3.9,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pf3/p7a/55359573.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p2d/p86/65957325.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pf5/p85/65957327.png?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/fc-26-ps5-143170903/?c=750000000', likes:0, categoryId:4 },  

    { id: 20, name: 'Spider-Man 2 PS5', description: 'Very good', price: 22000, rating: 4.9,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h5d/hff/84374509748254.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hfc/h80/84374509813790.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ha6/h6d/84374509879326.jpg?format=gallery-medium'],
      link:'https://kaspi.kz/shop/p/spider-man-2-ps5-rus-113510344/?c=750000000', likes:0, categoryId:4 },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}