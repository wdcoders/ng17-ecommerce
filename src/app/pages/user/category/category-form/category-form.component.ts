import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../../../shared/ui/card/card.component';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss',
})
export class CategoryFormComponent {}
