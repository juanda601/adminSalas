import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearSalaPage } from './crear-sala';

@NgModule({
  declarations: [
    CrearSalaPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearSalaPage),
  ],
})
export class CrearSalaPageModule {}
