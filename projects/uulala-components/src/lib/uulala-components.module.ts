import { NgModule } from '@angular/core';
import { UulalaComponentsComponent } from './uulala-components.component';
import { UulInputTextComponent } from './input-text/uul-input-text.component';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { UulLabelComponent } from './uul-label/uul-label.component';



@NgModule({
  declarations: [UulalaComponentsComponent, UulInputTextComponent, UulLabelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [UulalaComponentsComponent, UulInputTextComponent, UulLabelComponent]
})
export class UulalaComponentsModule { }
