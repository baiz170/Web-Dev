import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  link: string;
  selectedImageIndex: number;
}

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 17 256GB',
      description: 'Experience the latest iPhone 17 with super-fast performance and stunning display. Store all your photos and apps with 256GB of space. Capture every moment with an advanced camera system.',
      price: 560000,
      rating: 4.8,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p14/pa5/64165039.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p54/pa2/64165043.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0c/64462383.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/?c=750000000',
      selectedImageIndex: 0
    },
    {
      id: 2,
      name: 'AirPods 4',
      description: 'Wireless audio with crystal-clear sound and active noise cancellation. Comfortable fit for all-day use. Enjoy seamless connection with all Apple devices.',
      price: 87000,
      rating: 4.7,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/he6/87309386219550.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p20/108964628.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-active-noise-cancellation-belyi-124333921/?c=750000000',
      selectedImageIndex: 0
    },
    {
      id: 3,
      name: 'Sony PlayStation 5 Slim',
      description: 'Next-gen gaming in a compact design. Lightning-fast load times and immersive graphics. Perfect for both casual and hardcore gamers.',
      price: 305000,
      rating: 5.0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
      selectedImageIndex: 0
    },{
      id: 4,
      name: 'Apple MacBook Air 13 2020 13.3" ',
      description: 'Ultra-light laptop with long battery life. Perfect for work, school, and entertainment. Features a sharp 13.3" Retina display and powerful performance.',
      price: 420000,
      rating: 4.8,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      selectedImageIndex: 0
    },{
      id: 5,
      name: 'Sony PS5 DualSense ',
      description: 'Feel every action with the innovative DualSense controller. Adaptive triggers and haptic feedback for a fully immersive gaming experience. Ergonomic design for comfort.',
      price: 38000,
      rating: 4.2,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/p92/34376406.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0a/p93/34376408.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p93/p95/34376410.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-ps5-dualsense-chernyi-101662437/?c=750000000',
      selectedImageIndex: 0
    },{
      id: 6,
      name: 'Roborock Q8 Max Pro Plus Q8MPP52-02 ',
      description: 'Smart robot vacuum with powerful suction and smart mapping. Clean every corner automatically. Perfect for busy homes.',
      price: 169990,
      rating: 4.5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf0/p60/42281645.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p61/42281647.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p45/p61/42281648.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/roborock-q8-max-pro-plus-q8mpp52-02-chernyi-139667145/?c=750000000',
      selectedImageIndex: 0
    },{
      id: 7,
      name: ' Apple Watch Series 11 S/M ',
      description: 'Advanced health tracking and notifications on your wrist. Stylish design and customizable bands. Long battery life keeps you connected all day.',
      price: 265000,
      rating: 4.1,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe5/p89/66311545.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc9/p89/66311544.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p01/p8a/66311546.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-11-s-m-42-mm-rozovoe-zoloto-rozovyi-146092607/?c=750000000&m=Sulpak',
      selectedImageIndex: 0
    },{
      id: 8,
      name: 'Видеокарта GIGABYTE RTX 5070 Ti',
      description: 'High-end graphics card for ultra-smooth gaming and 3D rendering. Realistic visuals with ray tracing. Ideal for gamers and content creators.',
      price: 66000,
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/p4b/27092012.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p01/p4b/27092013.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe5/p4a/27092014.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/gigabyte-rtx-5070-ti-windforce-oc-edition-gv-n507twf3oc-16gd-16-gb-135370435/?c=750000000&m=18430177',
      selectedImageIndex: 0
    },{
      id: 9,
      name: 'F1 25 PS5',
      description: 'High-speed racing action on your console. Realistic physics and stunning graphics. Compete globally in the latest F1 season.',
      price: 45000,
      rating: 4,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc8/pa8/56874856.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/pa8/56874857.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p00/pa9/56874858.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/f1-25-ps5-143604881/?c=750000000',
      selectedImageIndex: 0
    },{
      id: 10,
      name: 'Apple iPad Air 11 2024',
      description: 'Sleek and powerful tablet for work and play. Stunning 11" display and fast processor. Perfect for streaming, drawing, and productivity on the go.',
      price: 399000,
      rating: 4.7,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/hdb/86223792013342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/h3a/86223759474718.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd7/hdb/86223759507486.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/?c=750000000',
      selectedImageIndex: 0
    }
  ];

  selectImage(product: Product, index: number) {
    product.selectedImageIndex = index;
  }

  nextImage(product: Product) {
    product.selectedImageIndex =
      (product.selectedImageIndex + 1) % product.images.length;
  }

  prevImage(product: Product) {
    product.selectedImageIndex =
      (product.selectedImageIndex - 1 + product.images.length) %
      product.images.length;
  }

  shareWhatsApp(product: Product) {
    const url = `https://wa.me/?text=${encodeURIComponent(
      'Check out this product: ' + product.link
    )}`;
    window.open(url, '_blank');
  }

  shareTelegram(product: Product) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      product.link
    )}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }

  getStars(rating: number) {
    return Array(Math.round(rating)).fill(0);
  }
}
