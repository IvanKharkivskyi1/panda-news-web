export type Weather = {
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};

export interface RawWeather {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}
