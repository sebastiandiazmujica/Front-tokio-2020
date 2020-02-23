import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule  } from '@angular/forms';
import {ApiService} from '../../../Services/api/api.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDataForm: FormGroup = new FormGroup({                               
    usuario: new FormControl('',Validators.required),
    contraseña: new FormControl('',Validators.required),
  });

  constructor(private ApiService: ApiService ,   private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { login: boolean }) { }

  ngOnInit() {
  }
  
  submitUserForm(data: any): void {
    console.log(data);
    if(data.usuario && data.contraseña)
      this.ApiService.sendRequestLogin(data)
      .subscribe((res: any) => {
                    if(res.message != 'ok')
                      alert(res.message );
                    else
                      this.dialogRef.close({ username: data.usuario, login:true });
                  },(err)=>{
                      alert(err.message);
                  });
  }

  onCancelClick(): void {
    this.dialogRef.close({ username: "", login:false });
  }



}
