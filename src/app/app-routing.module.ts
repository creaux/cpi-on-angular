import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainerComponent } from './login/login-container.component';
import { CollectionContainerComponent } from './collection/collection-container.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CollectionContainerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
