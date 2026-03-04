import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import delhiGate from "/delhiGate.svg";
import buildings from "/buildings.svg";
import gateway from "/gateway.svg";
import tajMahal from "/tajMahal.svg";
interface City {
  name: string;
  icon: string;
}

const popularCities: City[] = [
  { name: "Delhi", icon: delhiGate },
  { name: "Noida", icon: buildings },
  { name: "Mumbai", icon: gateway },
  { name: "Agra", icon: tajMahal },
  
];

const popularAreas: string[] = [
  "Indirapuram",
  "Vaishali",
  "Suraj Vihar",
  "Dwarka",
  "Rohini",
  "Laxmi Nagar",
];

interface LocationPickerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LocationPickerDialog: React.FC<LocationPickerDialogProps> = ({ open, onOpenChange }) => {
  const [search, setSearch] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-heading">Find Nearby Dermatologists</DialogTitle>
        </DialogHeader>

        <div className="relative">
          <Input
            placeholder="Search Location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-3">Popular Cities</h4>
          <div className="grid grid-cols-4 gap-3">
            {popularCities.map((city) => {
              
              const isSelected = selectedCity === city.name;
              return (
                <button
                  key={city.name}
                  onClick={() => setSelectedCity(isSelected ? null : city.name)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all ${
                    isSelected
                      ? "border-primary bg-secondary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <img src={city.icon} alt={city.name} className={`h-8 w-8 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-xs font-medium">{city.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-3">Popular Areas</h4>
          <div className="flex flex-wrap gap-2">
            {popularAreas.map((area) => {
              const isSelected = selectedArea === area;
              return (
                <button
                  key={area}
                  onClick={() => setSelectedArea(isSelected ? null : area)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {area}
                </button>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationPickerDialog;
