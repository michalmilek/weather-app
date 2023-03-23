import axios from "axios";

export interface LocationResponseInterface {
  name: string;
  local_names: any;
  lat: number;
  lon: number;
  country: string;
  state: string;
}
export interface CurrentWeatherInterface {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain?: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_miin: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain?: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface WeatherForUpcomingDaysInterface {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherItem[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface LocationInterface {
  lat: number;
  lon: number;
  name: string;
  country: string;
  state: string;
}

export const getData = async (searchValue: string) => {
  try {
    const response = await axios.get<LocationResponseInterface[]>(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getWeather = async (
  lat: number,
  lon: number,
  currTemp?: "K" | "F" | "C"
) => {
  try {
    const response = await axios.get<CurrentWeatherInterface>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${
        currTemp === "C"
          ? "&units=metric"
          : currTemp === "F"
          ? "&units=imperial"
          : ""
      }&appid=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTheWeatherForUpcomingDays = async (
  lat: number,
  lon: number,
  currTemp?: "K" | "F" | "C"
) => {
  try {
    const response = await axios.get<WeatherForUpcomingDaysInterface>(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}${
        currTemp === "C"
          ? "&units=metric"
          : currTemp === "F"
          ? "&units=imperial"
          : ""
      }&appid=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
