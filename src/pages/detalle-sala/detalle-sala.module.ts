import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleSalaPage } from './detalle-sala';

@NgModule({
  declarations: [
    DetalleSalaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleSalaPage),
  ],
})
export class DetalleSalaPageModule {}
