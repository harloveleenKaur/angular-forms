import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddDataComponent } from './add-data/add-data.component';
import { MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { NameComponent } from './name/name.component';
import { AddressComponent } from './address/address.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { PersonalTabComponent } from './personal-tab/personal-tab.component';
import { EdFormComponent } from './ed-form/ed-form.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTabsModule, ReactiveFormsModule, MatCardModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule , MatButtonModule],
  declarations: [ AppComponent, HelloComponent, AddDataComponent, NameComponent, AddressComponent, PersonalTabComponent, EdFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
