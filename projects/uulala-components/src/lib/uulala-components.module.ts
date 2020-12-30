import { NgModule } from '@angular/core';
import { UulalaComponentsComponent } from './uulala-components.component';
import { UulInputTextComponent } from './input-text/uul-input-text.component';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UulalaComponentsComponent, UulInputTextComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [UulalaComponentsComponent, UulInputTextComponent]
})
export class UulalaComponentsModule { }
