
export const Footer = () => {
  return (
    <footer className="text-center py-4 text-sm text-gray-500 mt-auto">
      <p>
        Weather data powered by Python backend. Icons by{" "}
        <a 
          href="https://lucide.dev/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-weather-blue hover:underline"
        >
          Lucide
        </a>
      </p>
    </footer>
  );
};
