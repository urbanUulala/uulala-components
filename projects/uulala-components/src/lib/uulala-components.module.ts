import { NgModule } from '@angular/core';
import { UulalaComponentsComponent } from './uulala-components.component';
import { UulInputTextComponent } from './input-text/uul-input-text.component';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { UulLabelComponent } from './uul-label/uul-label.component';
import { UulSelectComponent } from './uul-select/uul-select.component';
import { StepsComponent} from './steps/uul-steps.component';
import { UulImgComponent } from './uul-img/uul-img.component';
import { UulCheckComponent } from './uul-check/uul-check.component';
import { UulMenuButtonsComponent } from './uul-menu-buttons/uul-menu-buttons.component'
import { LocalService } from './services/local.service';
import { MessagesService } from './services/messages.service';
import { GraphService } from './services/graph.service';
import { Apollo } from 'apollo-angular';
import { GraphQLModule } from './modules/graphql.module';




@NgModule({
  declarations: [
    UulalaComponentsComponent,
    UulInputTextComponent,
    UulLabelComponent,
    UulSelectComponent,
    StepsComponent,
    UulImgComponent,
    UulCheckComponent,
    UulMenuButtonsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GraphQLModule
  ],
  exports: [
    UulalaComponentsComponent,
    UulInputTextComponent,
    UulLabelComponent,
    UulSelectComponent,
    StepsComponent,
    UulImgComponent,
    UulCheckComponent,
    UulMenuButtonsComponent
  ],
  providers: [
    LocalService,
    MessagesService,
    GraphService,
    Apollo
  ]
})
export class UulalaComponentsModule { }
