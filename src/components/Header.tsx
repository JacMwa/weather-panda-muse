
import { Cloud, GitBranch } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2">
        <Cloud className="text-weather-blue" size={32} />
        <h1 className="text-2xl font-bold text-weather-dark-blue">Weather Panda</h1>
      </div>
      <a 
        href="https://github.com/yourusername/weather-app" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800"
      >
        <GitBranch size={16} />
        <span className="hidden sm:inline">Source</span>
      </a>
    </header>
  );
};
