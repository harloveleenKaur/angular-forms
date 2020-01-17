import { Component, OnInit, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, NG_VALIDATORS, Validator} from '@angular/forms';


@Component({
  selector: 'app-personal-tab',
  templateUrl: './personal-tab.component.html',
  styleUrls: ['./personal-tab.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> PersonalTabComponent),
    multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PersonalTabComponent),
      multi: true
    }
  ]
})
export class PersonalTabComponent implements OnInit, ControlValueAccessor  {
 public personalForm: FormGroup
  constructor() { }

  ngOnInit() {

  this.personalForm = new FormGroup
    ({
    nameForm: new FormControl(''),
    addressForm: new FormControl('')
   })
  }
@ViewChild('nameForm', {static: true})
  val;
   public onTouched: () => void = () => { };
   
  writeValue(val): void {
    val && this.personalForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log("on change");
    this.personalForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.personalForm.disable() : this.personalForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    console.log("Personal Info validation", c);
    console.log(this.nameForm.valid)
    return this.personalForm.valid ? null : { invalidForm: { valid: false, message: "personalForm fields are invalid" } };
  }

  get nameForm(): any {
    return this.personalForm.get('nameForm');
  }
  get addressForm(): any {
    return this.personalForm.get('addressForm');
  }
}