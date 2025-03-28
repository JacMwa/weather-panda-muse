
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherData } from "@/types/weatherTypes";
import { Cloud, Droplets, Thermometer, Wind } from "lucide-react";

interface WeatherCardProps {
  weatherData: WeatherData;
  useCelsius: boolean;
}

export const WeatherCard = ({ weatherData, useCelsius }: WeatherCardProps) => {
  const { current } = weatherData;
  
  // Get background color based on weather condition
  const getBackgroundClass = (conditionCode: number) => {
    if (conditionCode >= 1000 && conditionCode < 1003) {
      return "bg-gradient-to-b from-weather-sunny to-sky-100"; // Sunny
    } else if (conditionCode >= 1003 && conditionCode < 1063) {
      return "bg-gradient-to-b from-weather-cloudy to-slate-100"; // Cloudy
    } else if ((conditionCode >= 1063 && conditionCode < 1200) || (conditionCode >= 1240 && conditionCode < 1300)) {
      return "bg-gradient-to-b from-weather-rainy to-blue-100"; // Rainy
    } else if (conditionCode >= 1200 && conditionCode < 1240) {
      return "bg-gradient-to-b from-weather-snowy to-blue-50"; // Snowy
    } else if (conditionCode >= 1273) {
      return "bg-gradient-to-b from-weather-stormy to-gray-200"; // Stormy
    } else {
      return "bg-gradient-to-b from-blue-200 to-blue-50"; // Default
    }
  };

  return (
    <Card className={`shadow-lg ${getBackgroundClass(current.condition.code)}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold">{weatherData.location}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <span className="text-5xl font-bold">
              {useCelsius ? `${Math.round(current.temp_c)}°C` : `${Math.round(current.temp_f)}°F`}
            </span>
            <span className="text-lg text-gray-600">
              Feels like {useCelsius ? `${Math.round(current.feelslike_c)}°` : `${Math.round(current.feelslike_f)}°`}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={current.condition.icon} 
              alt={current.condition.text} 
              className="w-24 h-24 animate-float" 
            />
            <span className="text-lg">{current.condition.text}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 bg-white/80 p-3 rounded-md">
            <Wind className="text-weather-blue" size={20} />
            <div>
              <p className="text-sm text-gray-500">Wind</p>
              <p className="font-medium">{current.wind_kph} km/h</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white/80 p-3 rounded-md">
            <Droplets className="text-weather-blue" size={20} />
            <div>
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="font-medium">{current.humidity}%</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white/80 p-3 rounded-md">
            <Thermometer className="text-weather-blue" size={20} />
            <div>
              <p className="text-sm text-gray-500">UV Index</p>
              <p className="font-medium">{current.uv}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white/80 p-3 rounded-md">
            <Cloud className="text-weather-blue" size={20} />
            <div>
              <p className="text-sm text-gray-500">Condition</p>
              <p className="font-medium">{current.condition.text}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
