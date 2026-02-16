import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['example6.css'],
  template: ` <div [contentEditable]="isEditable">Нажми сюда и редактируй текст!</div> `,
  standalone: true
})
export class Example6 {
  isEditable = true;
}
