import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  public allValid = false;
  constructor() { }
  allForms: FormGroup;
  
  ngOnInit() {
   this.allForms = new FormGroup({
   personalForm: new FormControl('' ),
   edForm: new FormControl('')
  })
   this.allForms.controls.personalForm.statusChanges.subscribe(val => {
      this.allValid = this.allForms.get('personalForm').valid && this.allForms.get('edForm').valid
   })
   this.allForms.controls.edForm.statusChanges.subscribe(val => {
      this.allValid = this.allForms.get('personalForm').valid && this.allForms.get('edForm').valid
   })
 
  }
}