import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR,FormControl, ControlValueAccessor, AbstractControl, ValidationErrors, Validators,NG_VALIDATORS} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> AddressComponent),
    multi: true
    }
    ,
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComponent),
      multi: true
    }
  ]
})
export class AddressComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() {
  }

  addressForm= new FormGroup({
    addLine1: new FormControl('', Validators.required),
    addLine2: new FormControl('', Validators.required),
    city: new FormControl(''),
    country: new FormControl('', Validators.required),
    postalcode: new FormControl('', Validators.required)
  })

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.addressForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log("on change");
    this.addressForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.addressForm.disable() : this.addressForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    console.log("Address Info validation", c);
    return this.addressForm.valid ? null : { invalidForm: { valid: false, message: "addressForm fields are invalid" } };
  }
}