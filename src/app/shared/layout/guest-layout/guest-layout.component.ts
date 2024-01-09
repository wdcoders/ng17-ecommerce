import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-guest-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './guest-layout.component.html',
  styleUrl: './guest-layout.component.scss',
})
export class GuestLayoutComponent {}
