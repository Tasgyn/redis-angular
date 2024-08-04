import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styleUrls: ['./usuario-new.component.scss']
})
export class UsuarioNewComponent implements OnInit {
 
  public form!: FormGroup;
  public maskTelefone = '(00) 00000-0000';
   
  constructor(
    public service: UsuarioService,
    private router: Router
  ) { }
    
  ngOnInit(): void {
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
      this.service.create(this.form.value).subscribe((res:any) => {
        this.router.navigateByUrl('');
   })
    }
   
  }

}
