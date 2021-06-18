import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, FormControl, Validators }from '@angular/forms'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  authForm = new FormGroup({
    email : new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private FormBuilder: FormBuilder, private http: HttpClient  ) { }

  login(){
    console.log(this.authForm.value);

    this.http.post("http://dekpo.herokuapp.com/auth",this.authForm.value).subscribe(
      (response) => {
        console.log(response)
      }
    )
  }

  ngOnInit(): void {
    this.authForm = this.FormBuilder.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(5)]]
  })
  }
}