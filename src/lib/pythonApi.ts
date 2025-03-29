
import { toast } from "sonner";

interface WeatherData {
  location: string;
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
    feelslike_f: number;
    uv: number;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
      };
    }[];
  };
}

// This is a mock service that simulates calling a Python backend
// In a real application, this would make an API call to your Python service
export async function fetchWeatherData(location: string): Promise<WeatherData | null> {
  try {
    // Simulate an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // If this were a real app, we would make an API call to the Python backend:
    // const response = await fetch(`/api/weather?location=${encodeURIComponent(location)}`);
    // return await response.json();
    
    // For now, we're using mock data based on the location
    return getMockWeatherData(location);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    toast.error("Failed to fetch weather data. Please try again.");
    return null;
  }
}

// Mock data generation based on location input
function getMockWeatherData(location: string): WeatherData {
  const lowercaseLocation = location.toLowerCase();
  
  // Generate somewhat realistic weather based on location name
  const isRainy = lowercaseLocation.includes("rain") || lowercaseLocation.includes("seattle") || lowercaseLocation.includes("london");
  const isSunny = lowercaseLocation.includes("sun") || lowercaseLocation.includes("los angeles") || lowercaseLocation.includes("miami");
  const isSnowy = lowercaseLocation.includes("snow") || lowercaseLocation.includes("alaska") || lowercaseLocation.includes("antarctica");
  const isCloudy = lowercaseLocation.includes("cloud") || lowercaseLocation.includes("san francisco");
  const isStormy = lowercaseLocation.includes("storm") || lowercaseLocation.includes("thunder");
  
  let condition = "Partly cloudy";
  let conditionCode = 1003;
  let baseTemp = 22; // Default base temp in celsius
  
  if (isRainy) {
    condition = "Light rain";
    conditionCode = 1183;
    baseTemp = 18;
  } else if (isSunny) {
    condition = "Sunny";
    conditionCode = 1000;
    baseTemp = 28;
  } else if (isSnowy) {
    condition = "Light snow";
    conditionCode = 1213;
    baseTemp = -2;
  } else if (isCloudy) {
    condition = "Overcast";
    conditionCode = 1009;
    baseTemp = 20;
  } else if (isStormy) {
    condition = "Thunderstorm";
    conditionCode = 1087;
    baseTemp = 24;
  }
  
  // Generate forecast data with some variation
  const forecast = Array.from({ length: 5 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    
    // Add some variation to the temperatures
    const tempVariation = Math.floor(Math.random() * 6) - 3;
    const maxTemp = baseTemp + tempVariation + (i % 2 === 0 ? 2 : 0);
    const minTemp = maxTemp - (4 + Math.floor(Math.random() * 3));
    
    // Slightly vary the condition for forecast days
    let dayCondition = condition;
    let dayConditionCode = conditionCode;
    
    if (i > 0 && Math.random() > 0.7) {
      // Sometimes change the condition for future days
      if (isRainy && Math.random() > 0.5) {
        dayCondition = "Moderate rain";
        dayConditionCode = 1186;
      } else if (isSunny && Math.random() > 0.7) {
        dayCondition = "Partly cloudy";
        dayConditionCode = 1003;
      } else if (isSnowy && Math.random() > 0.6) {
        dayCondition = "Moderate snow";
        dayConditionCode = 1216;
      } else if (Math.random() > 0.8) {
        dayCondition = "Partly cloudy";
        dayConditionCode = 1003;
      }
    }
    
    return {
      date: date.toISOString().split('T')[0],
      day: {
        maxtemp_c: maxTemp,
        maxtemp_f: (maxTemp * 9/5) + 32,
        mintemp_c: minTemp,
        mintemp_f: (minTemp * 9/5) + 32,
        condition: {
          text: dayCondition,
          icon: `//cdn.weatherapi.com/weather/64x64/day/${dayConditionCode}.png`,
          code: dayConditionCode
        }
      }
    };
  });
  
  return {
    location: location,
    current: {
      temp_c: baseTemp,
      temp_f: (baseTemp * 9/5) + 32,
      condition: {
        text: condition,
        icon: `//cdn.weatherapi.com/weather/64x64/day/${conditionCode}.png`,
        code: conditionCode
      },
      wind_kph: 15 + Math.floor(Math.random() * 20),
      humidity: 50 + Math.floor(Math.random() * 40),
      feelslike_c: baseTemp - 1 + Math.floor(Math.random() * 3),
      feelslike_f: ((baseTemp - 1 + Math.floor(Math.random() * 3)) * 9/5) + 32,
      uv: 3 + Math.floor(Math.random() * 8)
    },
    forecast: {
      forecastday: forecast
    }
  };
}
