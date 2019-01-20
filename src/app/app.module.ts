import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RadioBtnFormComponent } from './radio-btn-form/radio-btn-form.component';
import { SelectBtnFormComponent } from './select-btn-form/select-btn-form.component';
import { ApiService } from './services/api.service';
import { LoggerService } from './services/logger.service';
import { ClockComponent } from './clock/clock.component';
import { PeopleModule } from './people/people.module';
import { NewLoggerService } from './services/new-logger.service';
import { ConsoleWriterService } from './services/console-writer.service';

const simpleLogger = {
  log(msg: string) {
    console.log(`I am a simple logger ${msg}`);
  }
};

const loggerFactory = (writer: ConsoleWriterService) => {
  return new LoggerService(true, writer);
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    RadioBtnFormComponent,
    SelectBtnFormComponent,
    ClockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PeopleModule
  ],
  providers: [
    ApiService,
    NewLoggerService,
    // ALIAS ===> i componenti che usano LoggerServise adesso useranno NewLoggerService
    // {
    //   provide: LoggerService,
      // con useExisting usiamo la stessa istanza di NewLoggerService, se invece avessimo fatto:
      // useClass: NewLoggerService
      // avremmo usato una NUOVA istanza di NewLoggerService
      // useExisting: NewLoggerService
      // possiamo anche definire una const con una funzione e passaglierla come valore da usare
    //   useValue: simpleLogger,
    // }
    ConsoleWriterService,
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: [ConsoleWriterService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
