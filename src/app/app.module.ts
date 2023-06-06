import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildLifecycleComponent } from './child/child-lifecycle/child-lifecycle.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IemcrudComponent } from './iemcrud/iemcrud.component';
import { DirectivesComponent } from './directives/directives.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    LifecycleComponent,
    ChildLifecycleComponent,
    DatabindingComponent,
    IemcrudComponent,
    DirectivesComponent,
    ReactiveComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
