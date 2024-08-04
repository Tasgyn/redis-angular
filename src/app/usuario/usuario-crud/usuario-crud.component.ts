import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/usuario.model';

@Component({
  selector: 'app-usuario-crud',
  templateUrl: './usuario-crud.component.html',
  styleUrls: ['./usuario-crud.component.scss']
})
export class UsuarioCrudComponent implements OnInit {

  public usuarios?: Usuario[];

  constructor(public service:UsuarioService) { }

  ngOnInit(): void {
   this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  deleteUsuario(id:number){
    this.service.delete(id).subscribe(res => {
      this.getAll();
    })
  }

}
