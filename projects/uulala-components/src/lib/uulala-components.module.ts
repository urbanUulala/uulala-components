import { NgModule } from '@angular/core';
import { UulalaComponentsComponent } from './uulala-components.component';
import { UulInputTextComponent } from './input-text/uul-input-text.component';



@NgModule({
  declarations: [UulalaComponentsComponent, UulInputTextComponent],
  imports: [
  ],
  exports: [UulalaComponentsComponent]
})
export class UulalaComponentsModule { }
