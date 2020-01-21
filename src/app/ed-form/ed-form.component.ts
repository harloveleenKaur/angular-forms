import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, NG_VALIDATORS, Validator} from '@angular/forms';

@Component({
  selector: 'app-ed-form',
  templateUrl: './ed-form.component.html',
  styleUrls: ['./ed-form.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> EdFormComponent),
    multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EdFormComponent),
      multi: true
    }
  ]
})
export class EdFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

edForm= new FormGroup({
  first: new FormControl(''),
  grad: new FormControl('', Validators.required)
})
 public onTouched: () => void = () => { };
   
  writeValue(val): void {
    val && this.edForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
  //  console.log("on change");
    this.edForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
  //  console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.edForm.disable() : this.edForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
   // console.log("Personal Info validation", c);
   console.log(this.edForm.valid)
    return this.edForm.valid ? null : { invalidForm: { valid: false, message: "edForm fields are invalid" } };
  }

   get first(): any { return this.edForm.get('first')}
}