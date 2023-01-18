import { Component, OnInit } from '@angular/core';
import {CryptoHttpService} from 'src/app/core/http/crypto-http.service';
import {CryptoCurrencyDto} from 'src/app/core/dto/crypto-currency-dto';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css'],
  providers: [MessageService]
})
export class CryptosComponent implements OnInit {
  public cryptos: CryptoCurrencyDto[] = [];

  constructor(private readonly cryptosHttpService: CryptoHttpService,
              private readonly messageService: MessageService) {
  }

  public ngOnInit(): void {
    this.refetchCryptos();
  }

  private refetchCryptos(): void {
    this.cryptosHttpService.fetchCryptos().subscribe(c => {
      this.cryptos = [...c];
      console.log(this.cryptos);
    }, error => {
      console.log(error);
      this.messageService.add({severity: 'error', summary: 'Failed to fetch the data.', detail: 'Error in AlphaVantage API.'})
    });
  }
}
