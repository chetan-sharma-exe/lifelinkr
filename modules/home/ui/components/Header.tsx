import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#f0ecec]px-10 w-full sm:px-15 py-13 mt-25 flex flex-col gap-5 sm:gap-0 sm:flex-row">
      <div className="min-w-[50%] flex flex-col gap-3">
        <h1 className="text-[#023acd] text-4xl font-sans">
          TAILORED IVF MANAGEMENT SOFTWARE FOR CLINICS
        </h1>
        <p className="text-gray-600 text-xl">
          You All-in-One Software for Enhanced IVF Clinic Management and Patient
          Experience
        </p>
        <div className="grid grid-cols-2 grid-rows-3 gap-y-4">
          <div className="flex items-center">
            <Image src="/h-logo-1.png" height={45} width={45} alt="h-logo-1" />
            <p className="text-gray-500 text-xl">In-Built CRM</p>
          </div>
          <div className="flex items-center">
            <Image src="/h-logo-2.png" height={45} width={45} alt="h-logo-2" />
            <p className="text-gray-500 text-xl">Patient Insight</p>
          </div>
          <div className="flex items-center">
            <Image src="/h-logo-3.png" height={45} width={45} alt="h-logo-3" />
            <p className="text-gray-500 text-xl">Custom Fit</p>
          </div>
          <div className="flex items-center">
            <Image src="/h-logo-4.png" height={45} width={45} alt="h-logo-4" />
            <p className="text-gray-500 text-xl">Easy Connect</p>
          </div>
          <div className="flex items-center">
            <Image src="/h-logo-5.png" height={45} width={45} alt="h-logo-5" />
            <p className="text-gray-500 text-xl">Info on-the-go</p>
          </div>
          <div className="flex items-center">
            <Image src="/h-logo-6.png" height={45} width={45} alt="h-logo-6" />
            <p className="text-gray-500 text-xl">Data Transfer</p>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-[#18345c] rounded-xl flex flex-col gap-8 items-center py-7">
        <h1 className="text-white text-4xl">Schedule a Free Demo</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-x-4 sm:gap-x-7 gap-y-7">
          <input
            type="text"
            className="bg-[#18345c] border-white border-2 h-10 w-47 rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="Clinic Name*"
          />
          <input
            type="text"
            className="bg-[#18345c] border-white border-2 h-10 w-47 rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="Company Email*"
          />
          <input
            type="text"
            className="bg-[#18345c] border-white border-2 h-10 w-47 rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="Mobile*"
          />
          <input
            type="text"
            className="bg-[#18345c] border-white border-2 h-10 w-47 rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="Company Location*"
          />
        </div>
        <div className="flex items-center text-white gap-3">
          <Checkbox className="size-2xl" />
          <p>
            I agree and accept the{" "}
            <span className="text-[#ffcc27]">Terms and Conditions</span>
          </p>
        </div>
        <Button className="bg-white text-black h-15 w-55 rounded-full text-sm">
          Schedule Demo
          <ArrowRight className="text-[#ffcc27] size-7" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
