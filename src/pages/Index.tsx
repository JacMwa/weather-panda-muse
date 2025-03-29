
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "@/lib/pythonApi";
import { WeatherData } from "@/types/weatherTypes";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WeatherCard } from "@/components/WeatherCard";
import { ForecastCard } from "@/components/ForecastCard";
import { LocationSearch } from "@/components/LocationSearch";
import { TemperatureToggle } from "@/components/TemperatureToggle";
import { LoadingState } from "@/components/LoadingState";
import { Cloud, CloudRain, SunSnow } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [location, setLocation] = useState<string>("");
  const [useCelsius, setUseCelsius] = useState<boolean>(true);

  const { data: weatherData, isLoading, error, refetch } = useQuery({
    queryKey: ["weather", location],
    queryFn: () => fetchWeatherData(location),
    enabled: !!location,
  });

  const handleSearch = (searchLocation: string) => {
    setLocation(searchLocation);
  };

  const handleToggleUnit = (value: boolean) => {
    setUseCelsius(value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      
      <main className="flex-1 container max-w-4xl py-6 px-4">
        <section className="mb-8">
          <LocationSearch onSearch={handleSearch} isLoading={isLoading} />
        </section>

        {isLoading && (
          <LoadingState />
        )}

        {error && (
          <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-600">Failed to fetch weather data. Please try again.</p>
          </div>
        )}

        {!location && !isLoading && (
          <div className="text-center p-12 flex flex-col items-center">
            <div className="flex gap-4 mb-6">
              <Cloud className="text-weather-blue animate-bounce" size={32} />
              <CloudRain className="text-weather-rainy animate-bounce" style={{ animationDelay: "0.2s" }} size={32} />
              <SunSnow className="text-weather-sunny animate-bounce" style={{ animationDelay: "0.4s" }} size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Welcome to Weather Panda</h2>
            <p className="text-gray-500 max-w-md mb-8">
              Search for a location above to get the current weather and 5-day forecast.
            </p>
          </div>
        )}

        {weatherData && !isLoading && (
          <>
            <div className="flex justify-end mb-4">
              <TemperatureToggle useCelsius={useCelsius} onChange={handleToggleUnit} />
            </div>
            
            <div className="space-y-6">
              <WeatherCard weatherData={weatherData} useCelsius={useCelsius} />
              <ForecastCard weatherData={weatherData} useCelsius={useCelsius} />
            </div>

            <div className="mt-8 text-center">
              <button 
                onClick={() => {
                  refetch();
                  toast.info("Weather data refreshed!");
                }}
                className="text-weather-blue hover:text-weather-dark-blue underline text-sm"
              >
                Refresh data
              </button>
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
