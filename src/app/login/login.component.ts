import { Component, ViewChild ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators,FormControl } from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})





export class LoginComponent implements OnInit {
  user = {
    name: null,
    password: null
  };


  constructor(private formBuilder:FormBuilder,private router:Router,
    private acttivateRoute:ActivatedRoute){

  }

  loginForm:FormGroup;

  ngOnInit(): void {


    this.loginForm=new FormGroup({

      'username': new FormControl(null,[Validators.required,Validators.minLength(4)]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(8)])

    });
  }



  onSubmit() {
    
    console.log(this.loginForm);
    this.router.navigate(['info'])
  }

  
  

  
}

