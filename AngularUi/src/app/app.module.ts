import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { HerbsCatalogComponent } from "./components/herbs-catalog/herbs-catalog.component";
import { ConsultsPageComponent } from "./components/consults-page/consults-page.component";
import { ModalUpdateComponent } from "./components/modal-update/modal-update.component";
import { HomeComponent } from "./components/home/home.component";
import { RegisterPageComponent } from './components/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HerbsCatalogComponent,
    ConsultsPageComponent,
    ModalUpdateComponent,
    HomeComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
