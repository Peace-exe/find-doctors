import React from "react";
import { Star, MapPin, Phone, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import doctorAvatar from "/doctor-avatar.png";

interface Doctor {
  name: string;
  speciality: string;
  exp: string;
  rating: number;
  reviews: number;
  languages: string;
  clinic: string;
  location: string;
  online: boolean;
}

const doctors: Doctor[] = [
  { name: "Dr. Ananya Rao", speciality: "MD Dermatology", exp: "13+ Yrs", rating: 4.85, reviews: 32, languages: "English, Hindi", clinic: "Skin Care Clinic", location: "Indirapuram, Ghaziabad", online: true },
  { name: "Dr. Ananya Rao", speciality: "MD Dermatology", exp: "13+ Yrs", rating: 4.85, reviews: 32, languages: "English, Hindi", clinic: "Skin Care Clinic", location: "Indirapuram, Ghaziabad", online: false },
  { name: "Dr. Ananya Rao", speciality: "MD Dermatology", exp: "13+ Yrs", rating: 4.85, reviews: 32, languages: "English, Hindi", clinic: "Skin Care Clinic", location: "Indirapuram, Ghaziabad", online: true },
  { name: "Dr. Ananya Rao", speciality: "MD Dermatology", exp: "13+ Yrs", rating: 4.85, reviews: 32, languages: "English, Hindi", clinic: "Skin Care Clinic", location: "Indirapuram, Ghaziabad", online: true },
  { name: "Dr. Ananya Rao", speciality: "MD Dermatology", exp: "13+ Yrs", rating: 4.85, reviews: 32, languages: "English, Hindi", clinic: "Skin Care Clinic", location: "Indirapuram, Ghaziabad", online: false },
  { name: "Dr. Ananya Rao", speciality: "MD Dermatology", exp: "13+ Yrs", rating: 4.85, reviews: 32, languages: "English, Hindi", clinic: "Skin Care Clinic", location: "Indirapuram, Ghaziabad", online: true },
];

const TopDoctors: React.FC = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Top Doctor Dermatologists
          </h2>
          <a href="#" className="text-primary font-semibold text-sm hover:underline">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex gap-4">
                  <img src={doctorAvatar} alt={doc.name} className="w-16 h-16 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-semibold text-foreground truncate">{doc.name}</h3>
                      {doc.online && (
                        <Badge className="bg-primary text-primary-foreground text-xs whitespace-nowrap">
                          Online Consultation
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {doc.speciality} · {doc.exp} Experience
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 text-amber fill-amber" />
                      <span className="text-xs font-medium">{doc.rating}</span>
                      <span className="text-xs text-muted-foreground">({doc.reviews} ratings)</span>
                      <span className="text-xs text-muted-foreground ml-1">Speaks {doc.languages}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-sm font-medium text-foreground">{doc.clinic}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> {doc.location}
                  </p>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button className="flex-1" size="sm">
                    <Eye className="w-4 h-4" /> View Profile
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm">
                    <Phone className="w-4 h-4" /> Call Clinic
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
