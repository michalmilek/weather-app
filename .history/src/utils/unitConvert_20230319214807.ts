export function KelvinToCelsius(kTemp: number): number {
  const Celsius = kTemp - 273.15;

  return Celsius;
}
export function KelvinToFahrenheit(kTemp: number): number {
  const FahrenHeit = (((kTemp - 273.15) * 9) / 5) * 32;

  return FahrenHeit;
}

export function FahrenheitToCelsius(fTemp: number): number {
  const Celsius = (fTemp - 32) * 0.5556;

  return Celsius;
}

export function CelsiusToFahrenheit(cTemp: number): number {
  const Fahrenheit = cTemp * 1.8 + 32;

  return Fahrenheit;
}
