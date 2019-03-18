import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule
    ],
  exports: [
      MatToolbarModule,
      MatProgressBarModule,
      MatCardModule,
      MatButtonModule,
      MatSnackBarModule
    ]
})
export class MaterialModule { }
