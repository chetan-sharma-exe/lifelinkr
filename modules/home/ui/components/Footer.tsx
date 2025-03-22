import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f0ecec] py-5 flex flex-col sm:flex-row items-center">
      <div className="flex flex-col items-center w-[90%] sm:w-[60%] px-10">
        <Image src="/logo.png" height={270} width={270} alt="logo" />
        <p className="text-gray-500 mb-5">
          All Rights Reserved 2023-24 &#169; Copyright-LifeLinkr
        </p>
        <p className="text-blue-400 text-center text-sm">
          Privacy Policy | Ads Policy | Data Privacy | Disclaimer | User
          Agreement | Intellectual Property Rights | Cookie Policy | Refund
          Policy | Contact Information | Accessibility Statement | Security
          Policy | GDPR Compliance
        </p>
        <Image
          src="/footer-logo.png"
          height={40}
          width={40}
          alt="ganesha-logo"
        />
      </div>
      <div className="w-[80%] sm:w-[30%] flex flex-col gap-3">
        <p className="text-2xl">SCHEDULE YOUR DEMO</p>
        <input
          type="text"
          className="border-2 border-gray-400 rounded-xs w-full h-10 bg-white pl-2"
          placeholder="Enter Your Phone Number"
        />
        <Button className="bg-linear-to-r from-cyan-500 to-blue-500 text-white h-10 w-full rounded-sm text-sm">
          Book Appointment
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
