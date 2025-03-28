
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface TemperatureToggleProps {
  useCelsius: boolean;
  onChange: (value: boolean) => void;
}

export const TemperatureToggle = ({ useCelsius, onChange }: TemperatureToggleProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="temp-unit" className={!useCelsius ? "font-bold" : ""}>°F</Label>
      <Switch
        id="temp-unit"
        checked={useCelsius}
        onCheckedChange={onChange}
      />
      <Label htmlFor="temp-unit" className={useCelsius ? "font-bold" : ""}>°C</Label>
    </div>
  );
};
