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
import { UiService } from './services/ui.service';
import { UulModalComponent } from './uul-modal/uul-modal.component';
import { UulUserComponent } from './uul-user/uul-user.component';
import { UulToggleButtonComponent } from './uul-toggle-button/uul-toggle-button.component';
import { UulImgBackgroundComponent } from './uul-img-background/uul-img-background.component';
import { UulSwitchComponent } from './uul-switch/uul-switch.component';
import { FormatCardPipe } from './pipes/format-card.pipe';
import { FormatCardDatePipe } from './pipes/format-card-date.pipe';
import { UulSearchComponent } from './uul-search/uul-search.component';
import { FilterMovs } from './pipes/filter-movs.pipe'; 
import { SystemBalance } from './pipes/balance.pipe';
import { ValueEditorInputDirective } from './directives';
import { ParametersService } from './services';
import { FilterCryptoPipe } from './pipes/filter-crypto.pipe';
import { UulUploadFileComponent } from './uul-upload-file/uul-upload-file.component';
import { UtilsChartService } from './services/utilsChart.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { UulTransactionsComponent } from './uul-transactions/uul-transactions.component';




@NgModule({
  declarations: [
    UulalaComponentsComponent,
    UulInputTextComponent,
    UulLabelComponent,
    UulSelectComponent,
    StepsComponent,
    UulImgComponent,
    UulCheckComponent,
    UulMenuButtonsComponent,
    UulModalComponent,
    UulUserComponent,
    UulToggleButtonComponent,
    UulImgBackgroundComponent,
    UulSwitchComponent,
    FormatCardPipe,
    FormatCardDatePipe,
    UulSearchComponent,
    FilterMovs,
    SystemBalance,

    ValueEditorInputDirective,
    UulUploadFileComponent,
    LineChartComponent,
    FilterCryptoPipe,
    UulTransactionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GraphQLModule,
    NgxChartsModule
  ],
  exports: [
    UulalaComponentsComponent,
    UulInputTextComponent,
    UulLabelComponent,
    UulSelectComponent,
    StepsComponent,
    UulImgComponent,
    UulCheckComponent,
    UulMenuButtonsComponent,
    UulModalComponent,
    UulUserComponent,
    UulToggleButtonComponent,
    UulImgBackgroundComponent,
    UulSwitchComponent,
    FormatCardPipe,
    FormatCardDatePipe,
    UulSearchComponent,
    FilterMovs,
    SystemBalance,
    ValueEditorInputDirective,
    UulUploadFileComponent,
    LineChartComponent,
    NgxChartsModule,
    FilterCryptoPipe,
    UulTransactionsComponent
  ],
  providers: [
    LocalService,
    MessagesService,
    GraphService,
    UiService,
    ParametersService,
    UtilsChartService,
    Apollo
  ]
})
export class UulalaComponentsModule { }
