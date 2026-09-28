const { useState, useEffect } = React;

function App() {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);

  const fetchCoordinates = async () => {
    try {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`);
      const data = await response.json();
      console.log(data);
      if (data.results && data.results.length > 0) {
        const latitude = data.results[0].latitude;
        const longitude = data.results[0].longitude;
        fetchWeatherData(latitude, longitude);
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`);
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Yeh useEffect sirf ek dafa chalega jab app pehli baar load hogi (London ke liye)
  useEffect(() => {
    fetchCoordinates();
  }, []); // Empty brackets ka matlab hai sirf initial render par chalna

  const weatherText = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog'
  };

  const weatherCode = weatherData?.current?.weather_code;
  const weatherTextValue = weatherText[weatherCode];

  return (
    <div 
      style={{ padding: '30px 5px 0px' }}
      className="
      grid
      grid-rows-[auto_auto_auto_auto_auto_1fr]
      gap-3
      min-h-screen
      ">
      <Header />
      <SearchBar
        city={city} 
        setCity={setCity}
        fetchCoordinates={fetchCoordinates}
      />
      <WeatherBox
        temp={weatherData?.current?.temperature_2m}
        weatherText={weatherTextValue}
        H={weatherData?.daily?.temperature_2m_max?.[0]}
        L={weatherData?.daily?.temperature_2m_min?.[0]}
      />
      <WeatherStats
        humidity={weatherData?.current?.relative_humidity_2m}
        windSpeed={weatherData?.current?.wind_speed_10m}
      />
      <HourlyForecast />
      <ForecastDisplay
        time={weatherData?.hourly?.time}
        temp={weatherData?.hourly?.temperature_2m} 
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
