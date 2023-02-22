
import { Component, OnInit } from "@angular/core";
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})




export class InfoComponent  {
  
  @ViewChild('angForm') signForm :NgForm;
  submitted = false;

  courses = ['B.tech','B.sc','MBA','BBA','BCA','MCA','LLB','B.ED','B.A','M.A'];

  users=[];
 
  textData="";


  constructor() { }
 

  ngOnInit(): void {

  } 


  


  

  onSubmit(){

    this.submitted = true;

    const data= this.signForm.value;
    this.users.push(data);
    console.log(this.users);
    console.log(this.signForm);


    setTimeout(()=>{
      this.signForm.reset();
    },300);

    
      
    }

    
  
    resetForm(){
    this.signForm.reset();
    this.submitted=false;
  }


}


