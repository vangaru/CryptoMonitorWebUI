import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private readonly appConfigPath = "/assets/configuration/app.config.json";
  private appConfig: any = null;

  constructor(private readonly httpClient: HttpClient) {
  }

  public async loadAppConfig() {
    this.appConfig = await lastValueFrom(this.httpClient.get(this.appConfigPath));
  }

  public get cryptoApiUri() {
    if (this.appConfig == null) {
      throw Error("App Config is null.");
    }
    return this.appConfig.cryptoApiUri;
  }
}
