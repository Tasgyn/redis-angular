import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCrudComponent } from './usuario/usuario-crud/usuario-crud.component';
import { UsuarioNewComponent } from './usuario/usuario-new/usuario-new.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';

const routes: Routes = [
  { path: '', component: UsuarioCrudComponent },
  { path: 'usuario/new', component: UsuarioNewComponent },
  { path: 'usuario/edit/:id', component: UsuarioEditComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
