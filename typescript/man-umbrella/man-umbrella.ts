export function minUmbrellas(weather: string[]): number {
  const rainyWeather = ["rainy", "thunderstorms"];
  let umbrellaAtHome = 0;
  let umbrellaAtWork = 0;
  for (let i = 0; i < weather.length; i++) {
    console.log({ i, umbrellaAtHome, umbrellaAtWork });
    const isRaining = rainyWeather.some((w) => w === weather[i]);
    if (!isRaining) continue;
    const isMorning = i % 2 === 0;
    if (isMorning) {
      if (umbrellaAtHome !== 0) umbrellaAtHome--;
      umbrellaAtWork++;
      continue;
    }
    if (umbrellaAtWork !== 0) umbrellaAtWork--;
    umbrellaAtHome++;
  }
  return umbrellaAtHome + umbrellaAtWork;
}
const weather = ["rainy", "rainy", "rainy", "rainy"];
console.log(minUmbrellas(weather));
