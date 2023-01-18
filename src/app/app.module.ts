import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppConfigService } from './core/configuration/app-config.service';
import {UiModule} from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [AppConfigService],
      useFactory: (configService: AppConfigService) => {
        return async() => {
          await configService.loadAppConfig();
        }
      },
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
