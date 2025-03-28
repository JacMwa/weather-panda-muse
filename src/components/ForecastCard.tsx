
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherData } from "@/types/weatherTypes";

interface ForecastCardProps {
  weatherData: WeatherData;
  useCelsius: boolean;
}

export const ForecastCard = ({ weatherData, useCelsius }: ForecastCardProps) => {
  // Format date to display as "Mon, Apr 22"
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <Card className="shadow-lg bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {weatherData.forecast.forecastday.map((day) => (
            <div key={day.date} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors">
              <span className="font-medium w-24">{formatDate(day.date)}</span>
              
              <div className="flex items-center gap-2">
                <img 
                  src={day.day.condition.icon} 
                  alt={day.day.condition.text} 
                  className="w-10 h-10" 
                />
                <span className="text-sm hidden sm:inline">{day.day.condition.text}</span>
              </div>
              
              <div className="flex gap-2 text-sm min-w-20 justify-end">
                <span className="font-medium">
                  {useCelsius 
                    ? `${Math.round(day.day.maxtemp_c)}°` 
                    : `${Math.round(day.day.maxtemp_f)}°`}
                </span>
                <span className="text-gray-500">
                  {useCelsius 
                    ? `${Math.round(day.day.mintemp_c)}°` 
                    : `${Math.round(day.day.mintemp_f)}°`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
