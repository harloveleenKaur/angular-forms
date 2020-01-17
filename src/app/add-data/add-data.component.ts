import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  
  constructor() { }
  allForms = new FormGroup({
   personalForm: new FormControl(''),
   edForm: new FormControl('')
  })
  

  ngOnInit() {
    
  }
}