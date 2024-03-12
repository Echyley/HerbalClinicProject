import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HerbsCatalogComponent } from './components/herbs-catalog/herbs-catalog.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ConsultsPageComponent } from './components/consults-page/consults-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'herbs', component: HerbsCatalogComponent },
  { path: 'consults', component: ConsultsPageComponent },
  { path: 'update-user/:id', component: ModalUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
