import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input() isOpen = false;

  onClick() {
    // drawer.show();
    document.getElementById('readProductButton')?.click();
  }
}
