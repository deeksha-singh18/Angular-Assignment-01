import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder, FormArray} from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup

  constructor(private formBuilder:FormBuilder,private router:Router){

  }


  onSubmit(){
    console.log(this.signupForm);
    window.alert("SignUp is sucessful");
    this.router.navigate(['info'])
    
  }

  ngOnInit(){
    this.signupForm=new FormGroup({

        
      'firstname': new FormControl(null,[Validators.required,Validators.minLength(3)]),
      'lastname':new FormControl(null),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(8)])

     
     
     
     


    });


}

}
