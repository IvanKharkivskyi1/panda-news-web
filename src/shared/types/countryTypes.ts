export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  code: string;
  continent: string;
  languages: string[];
  currency: string;
  continents: string[];
}

export interface RawCountry {
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  region?: string;
  population?: number;
  flags?: {
    png?: string;
    svg?: string;
  };
  cca2?: string;
  continents?: string[];
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string }>;
}
