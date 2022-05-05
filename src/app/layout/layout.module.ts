import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports:[
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    LayoutRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class LayoutModule { }
