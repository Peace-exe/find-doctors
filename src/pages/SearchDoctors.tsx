import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ContactForm from "../components/ContactUs";
import CallbackBanner from "@/components/CallbackBanner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Search, Share2, Navigation } from "lucide-react";
import doctorAvatar from "/doctor-avatar.png";

interface Doctor {
  name: string;
  speciality: string;
  experience: string;
  clinic: string;
  distance: string;
  nextSlot: string;
  fee: number;
  driveTime: string;
}

const doctorsList: Doctor[] = [
  { name: "Dr. Simanto Mehta", speciality: "MD Dermatology", experience: "15 Year Experience", clinic: "Skin Care Clinic", distance: "2 km.", nextSlot: "Today 4.00 pm", fee: 800, driveTime: "20 Min." },
  { name: "Dr. Upasna Singhal", speciality: "MD Dermatology", experience: "10 Year Experience", clinic: "Skin Care Clinic", distance: "2 km.", nextSlot: "Today 4.00 pm", fee: 800, driveTime: "20 Min." },
  { name: "Dr. Simanto Mehta", speciality: "MD Dermatology", experience: "15 Year Experience", clinic: "Skin Care Clinic", distance: "2 km.", nextSlot: "Today 4.00 pm", fee: 800, driveTime: "20 Min." },
  { name: "Dr. Simanto Mehta", speciality: "MD Dermatology", experience: "15 Year Experience", clinic: "Skin Care Clinic", distance: "2 km.", nextSlot: "Today 4.00 pm", fee: 800, driveTime: "20 Min." },
];

const SearchDoctors: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("Delhi");
  const [specialty, setSpecialty] = useState("Dermatology");

  return (
    <div className="min-h-screen bg-background">
     

      {/* Filters Bar */}
      <div className="bg-muted border-b border-border lg:px-32">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-32.5 bg-background">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="clinic">In Clinic</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="today">
              <SelectTrigger className="w-45 bg-background">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Availability : Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-40 bg-background">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-45 bg-background">
                <SelectValue placeholder="Select Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5+ Years</SelectItem>
                <SelectItem value="10">10+ Years</SelectItem>
                <SelectItem value="15">15+ Years</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-32.5 bg-background">
                <SelectValue placeholder="All Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="fee">Fee</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Search Bar & Results Count */}
      <div className="container mx-auto px-4 py-6 lg:px-32">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-heading font-bold text-foreground">
            500+ Available in {location}
          </h2>
          <div className="flex items-center gap-2 flex-1 max-w-lg">
            <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-background flex-1">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent outline-none text-sm w-20 text-foreground"
              />
              <div className="w-px h-5 bg-border" />
              <input
                type="text"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="bg-transparent outline-none text-sm flex-1 text-foreground"
                placeholder="Search speciality..."
              />
            </div>
            <Button size="icon" className="shrink-0">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="space-y-4">
          {doctorsList.map((doc, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row gap-5">
                  {/* Avatar */}
                  <img
                    src={doctorAvatar}
                    alt={doc.name}
                    className="w-28 h-28 rounded-xl object-cover bg-muted shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="text-lg font-heading font-bold text-foreground">{doc.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {doc.speciality} <span className="font-medium text-foreground">{doc.experience}</span>
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3 text-primary" />
                          {doc.clinic}
                          <Badge variant="outline" className="ml-2 text-xs text-primary border-primary">
                            {doc.distance}
                          </Badge>
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Share2 className="w-3.5 h-3.5" /> Share
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Navigation className="w-3.5 h-3.5" /> Get Direction
                        </button>
                      </div>
                    </div>

                    {/* Slot / Fee / Distance row */}
                    <div className="flex items-center gap-0 mt-4 border border-border rounded-lg w-fit text-sm">
                      <div className="px-4 py-2 border-r border-border">
                        <p className="text-xs text-muted-foreground">Next Slot</p>
                        <p className="font-semibold text-primary">{doc.nextSlot}</p>
                      </div>
                      <div className="px-4 py-2 border-r border-border">
                        <p className="text-xs text-muted-foreground">FEE</p>
                        <p className="font-semibold text-foreground">₹{doc.fee}</p>
                      </div>
                      <div className="px-4 py-2">
                        <p className="text-xs text-muted-foreground">Distance</p>
                        <p className="font-semibold text-foreground">{doc.driveTime}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/doctor/${i}`)}
                      >
                        View Profile
                      </Button>
                      <Button size="sm">
                        Book Clinic Visit
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ContactForm />
      <CallbackBanner />
      
    </div>
  );
};

export default SearchDoctors;
