import Faqs from "@/modules/home/ui/components/Faqs";
import Features from "@/modules/home/ui/components/Features";
import Footer from "@/modules/home/ui/components/Footer";
import Header from "@/modules/home/ui/components/Header";
import Navbar from "@/modules/home/ui/components/Navbar";
import ScheduleDemo from "@/modules/home/ui/components/ScheduleDemo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Faqs />
      <ScheduleDemo />
      <Footer />
    </div>
  );
}
