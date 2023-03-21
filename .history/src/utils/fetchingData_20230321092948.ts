import axios from "axios";

interface LocationResponseInterface {
  name: string;
  local_names: any;
  lat: number;
  lon: number;
  country: string;
}
interface CurrentWeatherInterface {
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
  rain: {
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

export const getData = async (
  searchValue: string,
  setData: React.Dispatch<React.SetStateAction<{}>>
) => {
  try {
    const response = await axios.get<LocationResponseInterface[]>(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
    );
    console.log(response);
    setData(response);
  } catch (error) {
    console.error(error);
  }
};

export const getWeather = async (
  lat: number,
  lon: number,
  setWeather: React.Dispatch<React.SetStateAction<{}>>
) => {
  try {
    const response = await axios.get<CurrentWeatherInterface>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    );
    console.log(response);
    setWeather(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const fetchTheWeatherForUpcomingDays = async (
  lat: number,
  lon: number,
  setUpcomingDays: React.Dispatch<React.SetStateAction<{}>>
) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    );
    setUpcomingDays(response);
  } catch (error) {
    console.error(error);
  }
};
