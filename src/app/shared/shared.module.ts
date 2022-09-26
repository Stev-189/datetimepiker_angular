import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimepikermanualComponent } from './datetimepikermanual/datetimepikermanual.component';
import { Datetimepikermanual2Component } from './datetimepikermanual2/datetimepikermanual2.component';
import { Datetimepikermanual3Component } from './datetimepikermanual3/datetimepikermanual3.component';
import { Datetimepikermanual4Component } from './datetimepikermanual4/datetimepikermanual4.component';
import { Datetimepikermanual5Component } from './datetimepikermanual5/datetimepikermanual5.component';
import { Datetimepikermanual6Component } from './datetimepikermanual6/datetimepikermanual6.component';

@NgModule({
  declarations: [
    DatetimepikermanualComponent,
    Datetimepikermanual2Component,
    Datetimepikermanual3Component,
    Datetimepikermanual4Component,
    Datetimepikermanual5Component,
    Datetimepikermanual6Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatetimepikermanualComponent,
    Datetimepikermanual2Component,
    Datetimepikermanual3Component,
    Datetimepikermanual4Component,
    Datetimepikermanual5Component,
    Datetimepikermanual6Component,
  ]
})
export class SharedModule { }
