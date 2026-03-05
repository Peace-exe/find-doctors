import ConditionsTreated from "@/components/ConditionsTreated";
import CTAButtons from "@/components/CTAButtons";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testemonails";
import TopDoctors from "@/components/TopDoctors";
import ContactUs from "@/components/ContactUs"
import FAQSection from "@/components/FAQSection";
import CallbackBanner from "@/components/CallbackBanner";
import ArticlesSection from "@/components/ArticleSection";

export default function Home(){
    return <>
    <HeroSection/>
    <CTAButtons/>
    <ConditionsTreated/>
    <TopDoctors/>
    <ArticlesSection/>
    <Testimonials/>
    <ContactUs/>
    <FAQSection/>
    <CallbackBanner/>
    </>
}