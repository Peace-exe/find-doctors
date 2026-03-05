import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import FAQSection from "../components/FAQSection";
import CallbackBanner from "../components/CallbackBanner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {MapPin, CheckCircle, ChevronRight } from "lucide-react";
import doctorAvatar from "/doctor-avatar.png";

const doctorData = {
  name: "Dr. Upasna Singhal",
  speciality: "MD Dermatology",
  experience: "15 Year Experience",
  rating: 4.8,
  reviews: 2900,
  patients: "5000+",
  successRate: "98%",
  verified: true,
  clinic: "Skin Care Clinic",
  clinicAddress: "56/11 Sector 62, Noida Near Steller IT Park, Gautam Budh Nagar",
  distance: "2 km. away",
  consultationFee: 800,
  nextAvailable: "Today 4.00 pm",
  about: `Dr. Upasna Singhal is renowned as one of the leading Skin & Hair Dermatology in Delhi, bringing with her a wealth of experience and expertise. She is a graduate of Lady Hardinge Medical College, New Delhi, a prestigious years, Dr. Upasna Singhal has established herself as a trusted practitioner in the field of gynecology.\n\nThroughout her career, Dr. Malhotra has garnered a reputation for her commitment to patient care and clinical excellence. Her extensive knowledge and skills encompass a wide range of Skin & Hair Dermatology issues, from routine consultations to complex medical conditions. She is dedicated to staying at the forefront of medical advancements, ensuring that her patients receive the highest standard of care using the latest medical technologies.`,
  services: [
    "Acne Treatment", "Laser Hair Removal", "Skin Rejuvenation", "Chemical Peels", "Hair Loss",
    "Acne Treatment", "Laser Hair Removal", "Skin Rejuvenation", "Chemical Peels", "Hair Loss",
  ],
  specializations: ["Acne Treatment", "Laser Hair Removal", "Skin Rejuvenation", "Chemical Peels"],
  awards: ["Awarded Certificate of Merit for Clinical Medicine - 1992"],
  education: [
    "DGO - Lady Hardinge Medical College, New Delhi, 1996",
    "DNB - Obstetrics & Gynecology - National Board Of Examination, 1997",
    "MBBS - Lady Hardinge Medical College, New Delhi, 1992",
  ],
  memberships: ["Fetal Medicine Foundation India"],
  experienceList: [
    "Infertility Spl at Fertile Solutions IVF & Research Center",
    "Consultant at Lady Harding Medical College",
    "Consultant at Delhi Government",
    "Research Consultant at AIIMS",
  ],
  registrations: ["6111 Delhi Medical Council, 2000"],
  patientReview: {
    name: "Deepak Patel",
    text: "Dr. Upasna Singhal was very patient and explained the root cause of my issue clearly. The treatment started showing results within a week.",
  },
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-base font-heading font-bold text-primary-foreground bg-primary px-4 py-2 rounded-md mb-4 inline-block">
    {children}
  </h3>
);

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="text-sm text-foreground flex items-start gap-2">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

const DoctorProfile: React.FC = () => {
  const { id } = useParams();
  const doc = doctorData;
  const [showFullAbout, setShowFullAbout] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-background lg:mx-32">
      

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Doctor Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <img
                    src={doctorAvatar}
                    alt={doc.name}
                    className="w-32 h-32 rounded-xl object-cover bg-muted"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h1 className="text-2xl font-heading font-bold text-foreground">{doc.name}</h1>
                        <p className="text-sm text-muted-foreground mt-1">
                          {doc.speciality} <span className="text-accent font-semibold">{doc.experience}</span>
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ex-Senior Registrar St. John's Medical College and Hospital Bangalore
                        </p>
                        {doc.verified && (
                          <p className="text-sm text-primary flex items-center gap-1 mt-2 font-medium">
                            <CheckCircle className="w-4 h-4" /> Medical Registration Verified
                          </p>
                        )}
                      </div>
                      <Badge className="bg-accent text-accent-foreground text-sm px-3 py-1">
                        {doc.rating} Rating
                      </Badge>
                    </div>

                    <div className="flex gap-6 mt-4 pt-4 border-t border-border">
                      <div className="text-center">
                        <p className="text-xl font-heading font-bold text-foreground">{doc.patients}</p>
                        <p className="text-xs text-muted-foreground">Patient</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-heading font-bold text-foreground">{doc.reviews}</p>
                        <p className="text-xs text-muted-foreground">Review</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-heading font-bold text-foreground">{doc.successRate}</p>
                        <p className="text-xs text-muted-foreground">Successful</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Doctor */}
            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">About Doctor</h2>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {showFullAbout ? doc.about : doc.about.slice(0, 300) + "..."}
              </p>
              <button
                onClick={() => setShowFullAbout(!showFullAbout)}
                className="text-primary text-sm font-medium mt-2 hover:underline"
              >
                {showFullAbout ? "Show Less" : "Read More"}
              </button>
            </div>

            {/* Services */}
            <div>
              <SectionTitle>Services</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-1">
                {doc.services.map((s, i) => (
                  <p key={i} className="text-sm text-foreground flex items-center gap-2 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground" /> {s}
                  </p>
                ))}
              </div>
            </div>

            {/* Specializations & Awards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <SectionTitle>Specializations</SectionTitle>
                <BulletList items={doc.specializations} />
              </div>
              <div>
                <SectionTitle>Awards & Recognitions</SectionTitle>
                <BulletList items={doc.awards} />
              </div>
            </div>

            {/* Education & Memberships */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <SectionTitle>Education</SectionTitle>
                <BulletList items={doc.education} />
              </div>
              <div>
                <SectionTitle>Memberships</SectionTitle>
                <BulletList items={doc.memberships} />
              </div>
            </div>

            {/* Experience & Registrations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <SectionTitle>Experience</SectionTitle>
                <BulletList items={doc.experienceList} />
              </div>
              <div>
                <SectionTitle>Registrations</SectionTitle>
                <BulletList items={doc.registrations} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Clinic Info */}
            <Card>
              <CardContent className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-3">Clinic info</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square rounded-lg bg-muted" />
                  ))}
                </div>
                <h4 className="font-heading font-semibold text-foreground">{doc.clinic}</h4>
                <p className="text-xs text-muted-foreground mt-1">{doc.clinicAddress}</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  <MapPin className="w-3 h-3 mr-1" /> {doc.distance}
                </Badge>
                <div className="mt-4 w-full h-32 rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground">
                  Map Placeholder
                </div>
              </CardContent>
            </Card>

            {/* Patient Reviews */}
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-semibold text-foreground">Patient Reviews</h3>
                  <a href="#" className="text-xs text-primary hover:underline flex items-center gap-0.5">
                    See All {doc.reviews} <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-muted" />
                  <span className="text-sm font-semibold text-foreground">{doc.patientReview.name}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{doc.patientReview.text}</p>
              </CardContent>
            </Card>

            {/* Consultation Fee */}
            <Card>
              <CardContent className="p-5">
                <h3 className="font-heading font-semibold text-muted-foreground text-sm">Consultation Fee</h3>
                <p className="text-2xl font-heading font-bold text-foreground mt-1">₹{doc.consultationFee}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Next: <span className="text-primary font-semibold">{doc.nextAvailable}</span>
                </p>
                <Button className="mt-3 w-full" size="sm">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <FAQSection />
      <CallbackBanner />
      </>
  );
};

export default DoctorProfile;
