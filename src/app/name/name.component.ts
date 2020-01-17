import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, NG_VALIDATORS} from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> NameComponent),
    multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NameComponent),
      multi: true
    }
  ]
})
export class NameComponent implements OnInit, ControlValueAccessor {
 public nameForm: FormGroup
  constructor() { }

  ngOnInit() {
     this.nameForm= new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required)
  })
  }

  

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.nameForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log("on change");
    this.nameForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.nameForm.disable() : this.nameForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    console.log("Name Info validation", c);
    console.log(this.nameForm.valid)
    return this.nameForm.valid ? null : { invalidForm: { valid: false, message: "nameForm fields are invalid" } };
  }

  get fname(): any { return this.nameForm.get('fname')}

}