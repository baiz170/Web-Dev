import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` Hello {{ city }}, {{ 1 + 1 }} `,
  standalone: true
})
export class Example2  {
  city = 'San Francisco';
}
