import React, { useState } from "react";
import { Star, MapPin, Phone, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import doctorAvatar from "/doctor-avatar.png";
import { useNavigate } from "react-router-dom";
import ConsultationDialog from "./ConsultationDialog";

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
  const [showDialog,setShowDialog] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
    <section className="py-12 my-4 mx-4 md:mx-16 lg:mx-32 bg-background">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground">
        Top Doctor Dermatologists
      </h2>
      <a href="#" className="text-primary font-semibold text-sm hover:underline whitespace-nowrap ml-4">
        View All →
      </a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {doctors.map((doc, i) => (
        <Card key={i} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 sm:p-5">
            <div className="flex gap-3 sm:gap-4">
              <img
                src={doctorAvatar}
                alt={doc.name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 flex-wrap">
                  <h3 className="font-heading font-semibold text-foreground truncate">
                    {doc.name}
                  </h3>
                  {doc.online && (
                    <Badge className="bg-primary text-primary-foreground text-xs whitespace-nowrap shrink-0">
                      Online Consultation
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {doc.speciality} · {doc.exp} Experience
                </p>
                <div className="flex items-center flex-wrap gap-x-1 gap-y-0.5 mt-1">
                  <Star className="w-3 h-3 text-amber fill-amber shrink-0" />
                  <span className="text-xs font-medium">{doc.rating}</span>
                  <span className="text-xs text-muted-foreground">({doc.reviews} ratings)</span>
                  <span className="text-xs text-muted-foreground">· {doc.languages}</span>
                </div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-sm font-medium text-foreground truncate">{doc.clinic}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 shrink-0" />
                <span className="truncate">{doc.location}</span>
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <Button className="flex-1 min-w-0" size="sm" onClick={() => navigate(`/doctor/${i}`)}>
                <Eye className="w-4 h-4 shrink-0" />
                <span className="truncate">View Profile</span>
              </Button>
              <Button variant="outline" className="flex-1 min-w-0" size="sm" onClick={()=>setShowDialog(true)}>
                <Phone className="w-4 h-4 shrink-0" />
                <span className="truncate">Call Clinic</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
<ConsultationDialog open={showDialog} onOpenChange={setShowDialog}/>
</>
  );
};

export default TopDoctors;
