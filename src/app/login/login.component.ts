import { Component, ViewChild ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators,FormControl } from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import { Login } from '../interfaces/login';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})





export class LoginComponent implements OnInit {
 
  message:string ="";

  model:Login = {username:"deeksha",password:"deek1234"}


  constructor(private formBuilder:FormBuilder,private router:Router,
    private acttivateRoute:ActivatedRoute){

  }

  loginForm:FormGroup;

  ngOnInit(): void {


    this.loginForm=new FormGroup({

      username: new FormControl(null,[Validators.required,Validators.minLength(4)]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)])

    });
  }


  


  onSubmit() {
    
    console.log(this.loginForm);
    const data = this.loginForm.value;

    if(this.loginForm.invalid){
      return;
    }

   

    else{
      if(data.username==this.model.username && data.password==this.model.password){

       
        window.alert("Login Sucessful")

        localStorage.setItem('isLoggedIn',"true");
        localStorage.setItem('token',data.username);

        this.router.navigate(['/info']);
        
      }

      else{
        this.message = "Invalid Credentials";
        window.alert(this.message);
      }
    }

    
  }

  
  

  
}

