import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule ,FormBuilder} from '@angular/forms';
import {ApiService} from '../../../Services/api/api.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MustMatch } from '../../../helper/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userDataForm: FormGroup ;
  /*= new FormGroup({                               
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    repeat_password: new FormControl('',Validators.required),
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
  });*/



  constructor(private ApiService:ApiService ,   private dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { login: boolean },private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log('Responde')
    this.userDataForm=this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeat_password: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]]
    }, {
      validator: MustMatch('password', 'repeat_password')
    });
  }

  submitUserForm(data: any): void {
    console.log(data);
    if(data.username && data.password && data.repeat_password&& data.first_name&& data.last_name&& data.email)
      this.ApiService.sendRequestRegister(data)
      .subscribe((res: any) => {
                     alert('Registrado correctamente.');
                      this.dialogRef.close({ username: data.username, login:true });
                  },(err)=>{
                      alert(err.message);
                  });
  }

  onCancelClick(): void {
    this.dialogRef.close({ username: "", login:false }); 
  }
}


