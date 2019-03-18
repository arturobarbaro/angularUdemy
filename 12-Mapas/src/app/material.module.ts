import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule
    ],
  exports: [
      MatToolbarModule,
      MatProgressBarModule,
      MatButtonModule
    ]
})
export class MaterialModule { }
