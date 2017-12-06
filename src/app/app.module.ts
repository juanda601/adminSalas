import { HttpModule } from '@angular/http';
import { DetalleSalaPage } from '../pages/detalle-sala/detalle-sala';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SalasServiceProvider } from '../providers/salas-service/salas-service';
import { SalasPage } from '../pages/salas/salas';
import { ImagePicker } from '@ionic-native/image-picker';
import { CrearSalaPage } from '../pages/crear-sala/crear-sala';

@NgModule({
  declarations: [
    MyApp,
    SalasPage,
    DetalleSalaPage,
    CrearSalaPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SalasPage,
    DetalleSalaPage,
    CrearSalaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SalasServiceProvider
  ]
})
export class AppModule {}
