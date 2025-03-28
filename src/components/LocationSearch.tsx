
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LocationSearchProps {
  onSearch: (location: string) => void;
  isLoading: boolean;
}

export const LocationSearch = ({ onSearch, isLoading }: LocationSearchProps) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  const popularLocations = [
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Sydney"
  ];

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Enter city or location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button type="submit" disabled={isLoading || !location.trim()}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </form>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-sm text-gray-500 mr-2 mt-1">Popular:</span>
        {popularLocations.map((loc) => (
          <Button
            key={loc}
            variant="outline"
            size="sm"
            onClick={() => {
              setLocation(loc);
              onSearch(loc);
            }}
            className="bg-white hover:bg-gray-100"
          >
            {loc}
          </Button>
        ))}
      </div>
    </div>
  );
};
