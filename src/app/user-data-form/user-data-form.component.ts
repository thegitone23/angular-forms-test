import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent implements OnInit {

  userDataForm : FormGroup;
  fieldNameArr = ['First Name', 'Last Name', 'Age', 'State', 'District'];
  formContolArr = []; 


  constructor(fb : FormBuilder) {

    let obj = {};
    for(let i=0; i<this.fieldNameArr.length; i++)
    {
      // @ts-ignore
      obj[this.fieldNameArr[i]] = this.formContolArr[i] = new FormControl('', Validators.required);
    }
    this.userDataForm = fb.group(obj);
   
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log('Submit Detected .. Printing Submitted Data');
    console.log(this.userDataForm.value);
  }

}
