import { Routes } from '@angular/router';
import { GuestLayoutComponent } from './shared/layout/guest-layout/guest-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { UserLayoutComponent } from './shared/layout/user-layout/user-layout.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { CategoryComponent } from './pages/user/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoryFormComponent } from './pages/user/category/category-form/category-form.component';

export const routes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/create', component: CategoryFormComponent },
    ],
  },
];
