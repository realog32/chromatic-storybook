import { Component, Input } from '@angular/core';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [KENDO_BUTTONS],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  // disabled = Input();
  render = false;
}
