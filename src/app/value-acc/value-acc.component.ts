import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-value-acc',
  templateUrl: './value-acc.component.html',
  styleUrls: ['./value-acc.component.css']
})
export class ValueAccComponent {
  errorMessages = { required: 'The name field is required' };
  testControl = new FormControl('MyDefaultValue', Validators.required);

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl(0, Validators.required),
  });
  submit(){
    console.log(this.formGroup.value);
  }
}
