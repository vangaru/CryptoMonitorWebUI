import {DataPointDto} from "./data-point-dto";
import {CryptoCurrencyMetadataDto} from "./crypto-currency-metadata-dto";

export interface CryptoCurrencyDto {
  fromCurrency: string,
  toCurrency: string,
  dataPointDto: DataPointDto,
  cryptoCurrencyMetadataDto: CryptoCurrencyMetadataDto
}