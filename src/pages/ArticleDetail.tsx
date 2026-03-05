import React, { useState } from "react";
import { useParams } from "react-router-dom";

import CallbackBanner from "../components/CallbackBanner";
import FAQSection from "../components/FAQSection";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mapPlaceholder from "/mapPlaceholder.svg";

const ArticleDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const steps = [
    {
      title: "Detailed Skin Assessment",
      description:
        "Your journey begins with a comprehensive skin evaluation, including medical history review, lifestyle analysis, and advanced diagnostic tools to understand your concerns at the deepest level.",
    },
    {
      title: "Personalized Treatment Planning",
      description:
        "Based on your skin needs and goals, we create a fully customized treatment plan that outlines procedures, expected outcomes, timelines, and care recommendations tailored exclusively for you.",
    },
    {
      title: "Clear Guidance at Every Step",
      description:
        "We explain each stage of the process—from diagnosis and treatment options to procedure details and aftercare—ensuring complete clarity, transparency, and confidence throughout your experience.",
    },
    {
      title: "Advanced, Evidence-Based Procedures",
      description:
        "Every treatment is performed using scientifically backed methods, cutting-edge technology, and the highest safety standards to deliver visible, long-lasting, and natural-looking results.",
    },
  ];

  const doctors = [
    { name: "Dr. Ananya Rao", specialty: "MD Dermatology", experience: "10+ Yrs. Experience", rating: 4.7, reviews: 120, tags: ["Acne Expert", "Chemical Peels"], fee: 800 },
    { name: "Dr. Ananya Rao", specialty: "MD Dermatology", experience: "10+ Yrs. Experience", rating: 4.7, reviews: 120, tags: ["Acne Expert", "Chemical Peels"], fee: 800 },
  ];

  return (
    <div className="min-h-screen bg-background ">
     

      <div className="container mx-auto px-4 py-8 lg:px-32">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Banner */}
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <p className="text-sm mb-1">How to</p>
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-1">
                Find the <span className="italic">Best</span>
              </h1>
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Dermatologist?</h1>
              <p className="text-sm opacity-90">
                Make an informed choice by checking qualifications experience & real patient results.
              </p>
            </div>

            {/* Article Content */}
            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">Dermatologist</h2>
              <div className={`text-sm text-muted-foreground leading-relaxed space-y-4 ${!expanded ? "line-clamp-6" : ""}`}>
                <p>
                  Dr. Ananya Rao is one of the leading dermatologists, known for her commitment to staying at the forefront of rapid scientific advancements in dermatology and cosmetology. With a strong emphasis on evidence-based treatments and cutting-edge technologies, she consistently delivers exceptional results that speak for themselves. Her expertise spans clinical dermatology, aesthetic procedures, and advanced cosmetic solutions tailored to each patient's unique needs.
                </p>
                <p>
                  Recognized as one of the top dermatologists and cosmetologists in South Delhi, she continues to set new benchmarks in patient satisfaction and treatment excellence. Whether addressing common skin conditions or performing high-precision cosmetic procedures, Dr. Rao's approach blends medical expertise with artistic precision — making her a trusted name in modern skincare.
                </p>
              </div>
              <button onClick={() => setExpanded(!expanded)} className="text-primary text-sm font-medium mt-2">
                {expanded ? "Read Less" : "Read More"}
              </button>
            </div>

            {/* Stats Pills */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Duration", value: "50-60 Min." },
                { label: "Downtime", value: "2-5 Days" },
                { label: "Pain Level", value: "Mild" },
              ].map((stat) => (
                <div key={stat.label} className="bg-primary text-primary-foreground rounded-full px-6 py-3 text-center min-w-[140px]">
                  <div className="font-bold text-sm">{stat.value}</div>
                  <div className="text-xs opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* What to Expect */}
            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">What is Expect</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                From the moment you walk in, you'll experience a carefully structured, patient-focused journey beginning with an in-depth consultation, advanced skin analysis, and a complete understanding of your concerns. We guide you through every step—explaining the diagnosis, discussing treatment options, setting realistic expectations, and crafting a personalized plan using the latest dermatology and cosmetology advancements.
              </p>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <Search className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{step.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctors for Treatment */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-heading font-bold text-foreground">Doctor for Acne Peel</h2>
                <button className="text-primary text-sm font-medium flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {doctors.map((doc, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground text-lg font-bold">{doc.name[4]}</span>
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground text-sm">{doc.name}</h3>
                          <p className="text-xs text-muted-foreground">{doc.specialty} • {doc.experience}</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-medium">{doc.rating}</span>
                            <span className="text-xs text-muted-foreground">• {doc.reviews} Reviews</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        {doc.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 text-xs" onClick={() => navigate(`/doctor/${i}`)}>
                          View Profile
                        </Button>
                        <Button size="sm" className="flex-1 text-xs">Book ₹{doc.fee}</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Clinic Info */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-heading font-semibold text-foreground mb-3">Clinic info</h3>
                <div className="grid grid-cols-4 gap-1 mb-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="aspect-square bg-muted rounded" />
                  ))}
                </div>
                <h4 className="font-semibold text-foreground text-sm">Skin Care Clinic</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  56/11 Sector 62, Noida Near Steller IT Park, Gautam Budh Nagar
                </p>
                <Badge className="mt-2 bg-primary/10 text-primary hover:bg-primary/20 text-xs">
                  <MapPin className="w-3 h-3 mr-1" /> 2 km. away
                </Badge>
                <div className="mt-3 w-full h-32 rounded-lg overflow-hidden bg-muted">
  <img
    src={mapPlaceholder}
    alt="Clinic location map"
    className="w-full h-full object-cover"
  />
</div>
              </CardContent>
            </Card>

            {/* Patient Reviews */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-semibold text-foreground text-sm">Patient Reviews</h3>
                  <button className="text-primary text-xs">See All 125 →</button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-muted" />
                  <span className="font-medium text-sm text-foreground">Deepak Patel</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Dr. Upasna Singhal was very patient and explained the root cause of my issue clearly. The treatment started showing results within a week.
                </p>
              </CardContent>
            </Card>

            {/* Consultation Fee */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-heading font-semibold text-foreground text-sm mb-2">Consultation Fee</h3>
                <p className="text-2xl font-bold text-foreground">₹800</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Clock className="w-3 h-3" />
                  <span>Next <span className="text-primary font-medium">Today 4.00 pm</span></span>
                </div>
                <Button className="w-full mt-3" size="sm">Book Appointment</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <FAQSection />
      <CallbackBanner />
      
    </div>
  );
};

export default ArticleDetail;
