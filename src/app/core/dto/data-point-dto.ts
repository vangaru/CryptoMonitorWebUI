export interface DataPointDto {
  closingPrice: number,
  closingPriceUsd: number,
  highestPrice: number,
  highestPriceUsd: number,
  lowestPrice: number,
  lowestPriceUsd: number,
  marketCapitalization: number,
  openingPrice: number,
  openingPriceUsd: number,
  time: Date,
  volume: number
}