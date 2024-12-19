export enum Continents {
  Asia = 'Asia',
  Europe = 'Europe',
  Africa = 'Africa',
  Oceania = 'Oceania',
  NorthAmerica = 'North America',
  SouthAmerica = 'South America',
}

export enum IncorrectCityNames {
  Naypyidaw = 'Nay Pyi Taw',
  Ngerulmud = 'Melekeok',
  Fakaofo = 'Tokelau',
  "Nuku'alofa" = 'Tongatapu',
  Yaoundé = 'Yaounde',
  "Sana'a" = 'Sanaa',
}

export enum IncorrectCountryNames {
  Czechia = 'Czech Republic',
  Eswatini = 'Swaziland',
}

export enum AvailableLanguages {
  en = 'English',
  uk = 'Українська',
  ro = 'Română',
}

export enum AvailableFlags {
  en = 'https://flagcdn.com/w320/gb.png',
  uk = 'https://flagcdn.com/w320/ua.png',
  ro = 'https://flagcdn.com/w320/ro.png',
}

export type LanguageKeys = keyof typeof AvailableLanguages;
