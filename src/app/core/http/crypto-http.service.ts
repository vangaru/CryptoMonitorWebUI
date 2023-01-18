import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../configuration/app-config.service';
import {Observable} from 'rxjs';
import {CryptoCurrencyDto} from '../dto/crypto-currency-dto';

@Injectable({
  providedIn: 'root'
})
export class CryptoHttpService {

  constructor(private readonly httpClient: HttpClient, private readonly  config: AppConfigService) { }

  public fetchCryptos(): Observable<CryptoCurrencyDto[]> {
    return this.httpClient.get<CryptoCurrencyDto[]>(this.config.cryptoApiUri);
  }

  public fetchCryptoDetails(cryptoCode: string): Observable<CryptoCurrencyDto> {
    return this.httpClient.get<CryptoCurrencyDto>(`${this.config.cryptoApiUri}/${cryptoCode}`);
  }
}
