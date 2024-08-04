import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioCrudComponent } from './usuario/usuario-crud/usuario-crud.component';
import { UsuarioService } from './usuario/service/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioNewComponent } from './usuario/usuario-new/usuario-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioCrudComponent,
    UsuarioNewComponent,
    UsuarioEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
