import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // registerationForm=new FormGroup({
  //   userName:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     state:new FormControl(''),
  //     city:new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // })

  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3)]],
    email:[''],
    subscribe:[false],
    password:[''],
    confirmPassword:[''],
    alternativeEmails:new FormArray([]),
    address:this.fb.group({
      state:[''],
      city:[''],
      postalCode:['']
    })
  })

 get userName(){
   return this.registerationForm.get('userName');
 }

 get email(){
   return this.registerationForm.get('email')
 }

 get alternativeEmails(){
   return this.registerationForm.get("alternativeEmails") as FormArray
 }

  constructor(private fb:FormBuilder) { 
  }

  ngOnInit(): void {
  }

  getData(){
    // this.registerationForm.setValue({
    //   userName:'ITI',
    //   password:'123',
    //   confirmPassword:'123',
    //   address:{
    //     state:"Egypt",
    //     city:"Assiut",
    //     postalCode:"7111"
    //   }
    // })

    this.registerationForm.patchValue({
        userName:' ITI',      
        address:{ 
          state: "Egypt",
                city:"Assiut",
           postalCode:"7111"
        }
       })
    
  }


  setEmailValidation(){
    const email=this.registerationForm.get('email');
    this.registerationForm.get('subscribe').valueChanges.subscribe(
      checkedValue=>{
        if(checkedValue){
          email.setValidators(Validators.required)
        }
        else{
          email.clearValidators();
        }
        email.updateValueAndValidity();
      }
    )
  }

  addAlernativeEmails(){
    this.alternativeEmails.push(this.fb.control(''))
    
  }

}
