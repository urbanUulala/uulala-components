import { NgModule } from '@angular/core';
import { UulalaComponentsComponent } from './uulala-components.component';
import { UulInputTextComponent } from './input-text/uul-input-text.component';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { UulLabelComponent } from './uul-label/uul-label.component';
import { UulSelectComponent } from './uul-select/uul-select.component';



@NgModule({
  declarations: [
    UulalaComponentsComponent,
    UulInputTextComponent,
    UulLabelComponent,
    UulSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UulalaComponentsComponent,
    UulInputTextComponent,
    UulLabelComponent,
    UulSelectComponent
  ]
})
export class UulalaComponentsModule { }
