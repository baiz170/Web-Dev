import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  template: `<product-list></product-list>`
})
export class App {}

bootstrapApplication(App);
