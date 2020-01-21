import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  
  constructor() { }
  
  public allForms:  FormGroup

  ngOnInit() {
    this.allForms = new FormGroup({
   personalForm: new FormControl(''),
   edForm: new FormControl('')
  }, this.allValidate )
  }

  ngAfterViewInit() {
    console.log('Values on allform():');
    this.allValidate(this.allForms)
  } 

  allValidate(fg: FormGroup): any{
    console.log(fg.valid)
    return { "valid": fg.valid};

  }
}