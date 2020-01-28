import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbButtonModule, NbInputModule, NbRadioModule,
  NbDialogModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HealthPredictorComponent } from './health-predictor/health-predictor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HealthPredictorResultComponent } from './health-predictor-result/health-predictor-result.component';
import { PLoginComponent } from './p-login/p-login.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NbDialogModule.forRoot(),
    
  ],
  declarations: [
    PagesComponent,
    HealthPredictorComponent,
    HealthPredictorResultComponent,
    PLoginComponent,
  ],
})
export class PagesModule {
}