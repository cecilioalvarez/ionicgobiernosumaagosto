import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Pagina2Page } from '../pages/pagina2/pagina2';
import { Pagina3Page } from '../pages/pagina3/pagina3';
import { LibroRestProvider } from '../providers/libro-rest/libro-rest';
import { HttpClientModule, HttpClient } from '../../node_modules/@angular/common/http';
import { FormularioPage } from '../pages/formulario/formulario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,Pagina2Page,Pagina3Page,FormularioPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Pagina2Page
    ,Pagina3Page,
    FormularioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LibroRestProvider,
    HttpClient
  ]
})
export class AppModule {}
