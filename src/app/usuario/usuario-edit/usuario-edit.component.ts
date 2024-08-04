import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario.model';


@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent implements OnInit {

  
  public form!: FormGroup;
  id!: number;
  usuario!: Usuario;

   
  constructor(
    public service: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.service.get(this.id).subscribe((data: Usuario)=>{
      this.usuario = data;
      this.form.patchValue(this.usuario);
    }); 

    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('',  [Validators.required, Validators.email])
    });
  }
    
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form);
    if(this.form.valid){
      this.service.update(this.id, this.form.value).subscribe((res:any) => {
        this.router.navigateByUrl('');
   })
    }
   
  }

}
