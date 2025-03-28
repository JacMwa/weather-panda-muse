
import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export const LoadingState = () => {
  return (
    <Card className="w-full p-8 flex flex-col items-center justify-center space-y-4 bg-white/50">
      <Loader2 className="h-8 w-8 animate-spin text-weather-blue" />
      <p className="text-lg text-gray-500">Loading weather data...</p>
    </Card>
  );
};
