import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PingDetailsPage } from './ping-details';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PingDetailsPage),
    TranslateModule.forChild()
  ],
  exports: [
    PingDetailsPage
  ]
})
export class PingDetailsPageModule {}
