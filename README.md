
# Weather Panda - A Python-Powered Weather Application

## Project info

**URL**: https://lovable.dev/projects/45572ef4-06cf-4eda-8ff0-2313411af656

## Overview

Weather Panda is a modern, responsive weather application that simulates integration with a Python backend for weather data processing. The application provides current weather conditions and 5-day forecasts for locations worldwide.

## Features

- Search for weather by location name
- Display current weather conditions (temperature, feels like, wind, humidity, UV index)
- Show 5-day weather forecast
- Toggle between Celsius and Fahrenheit
- Responsive design works on all devices
- Weather-appropriate styling and animations

## Python Backend Integration

The application includes a simulated Python backend connection. In a real-world implementation, you would:

1. Create a Python backend using Flask, FastAPI, or Django
2. Set up API endpoints that fetch data from weather services
3. Process and transform the data as needed
4. Connect the React frontend to your Python API

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **State Management**: React Query
- **Simulated Backend**: Mocked API calls (representing Python backend)
- **Icons**: Lucide React

## How to Use

1. Enter a location in the search bar or click on one of the popular city buttons
2. View the current weather and forecast
3. Toggle between Celsius and Fahrenheit using the temperature switch
4. Click "Refresh data" to update the weather information

## Getting Started

Follow these steps to run the project locally:

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start the development server
npm run dev
```

## Future Enhancements

- Implement a real Python backend using Flask or FastAPI
- Add geolocation for automatic weather detection
- Integrate with multiple weather data providers for comparison
- Add historical weather data and charts
- Implement weather alerts and notifications

## Credits

- Weather icons and data structure inspired by [WeatherAPI](https://www.weatherapi.com/)
- UI design inspired by modern weather applications
