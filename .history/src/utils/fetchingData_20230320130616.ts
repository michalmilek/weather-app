import axios from "axios";

export const getData = async (
  searchValue: string,
  setData: React.Dispatch<React.SetStateAction<{}>>
) => {
  try {
    const response = await axios.get(
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
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    );
    console.log(response);
    setWeather(response.data);
  } catch (error) {
    console.error(error);
  }
};
