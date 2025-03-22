import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ScheduleDemo = () => {
  return (
    <>
      <div className="w-[90%] sm:w-[61%] mx-5 sm:mx-15 my-10 bg-[#18345c] rounded-xl flex flex-col gap-8 items-center py-7">
        <h1 className="text-white text-4xl">Schedule a Free Demo</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-10 sm:grid-rows-7 gap-x-7 gap-y-7">
          <input
            type="text"
            className="bg-[#18345c] border-white border-2 h-10 w-70 rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="Full Name*"
          />
          <input
            type="text"
            className="bg-[#18345c] border-white border-2 h-10 w-70 rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="Email Address*"
          />
          <input
            type="text"
            className="bg-[#18345c] border-white border-2 h-10 w-70 rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="Phone Number*"
          />
          <input
            type="text"
            className="bg-[#18345c] border-white border-2 h-10 w-70 rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="WhatsApp Number"
          />
          <input
            type="text"
            className="bg-[#18345c] border-white border-2 h-10 w-70 rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="Clinic Name*"
          />
          <input
            type="text"
            className="bg-[#18345c] border-white border-2 h-10 w-70 rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="Country*"
          />
          <input
            type="text"
            className="bg-[#18345c] border-white border-2 h-10 w-70 rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="City*"
          />
          <input
            type="text"
            className="bg-[#18345c] border-white border-2 h-10 w-70 rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="No. of Users"
          />
          <input
            type="text"
            className="bg-[#18345c] border-white col-span-1 sm:col-span-2 border-2 h-10 w-full rounded-xl pl-3 pb-1 placeholder:text-white text-white"
            placeholder="Currently Using Any Software?*"
          />
          <textarea
            className="bg-[#18345c] border-white col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 border-2 h-full w-full rounded-xl pl-3 pt-3 pb-1 placeholder:text-white text-white"
            placeholder="Message*"
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
      {/* Ad 1 */}
      <div className="w-[90%] sm:w-[61%] bg-white rounded-xl mx-5 sm:mx-15 p-10 flex flex-col items-center mt-10 gap-10">
        <h1 className="text-[#18345c] text-4xl font-bold">
          Managing ART Made Hassle Free
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Image
            src="/schedule-1.png"
            width={400}
            height={400}
            alt="faq-banner"
          />
          <div className="flex flex-col gap-5">
            <ul>
              <li className="text-gray-500">
                &#9679; Comprehensive and secure platform for managing IVF and
                reproductive health information.
              </li>
              <li className="text-gray-500">
                &#9679; Centralizes patient data, lab records, treatment cycles,
                and financial information.
              </li>
              <li className="text-gray-500">
                &#9679; Designed specifically for fertility clinics, making
                critical information easily accessible.
              </li>
              <span className="text-blue-400 text-sm">Read More.</span>
            </ul>
            <Button className="bg-linear-to-r from-cyan-500 to-blue-500 text-white h-12 w-50 rounded-full text-sm">
              Schedule Demo
              <ArrowRight className="text-[#f3c21f] size-7" />
            </Button>
          </div>
        </div>
      </div>
      {/* Ad 2 */}
      <div className="w-[90%] sm:w-[61%] bg-white rounded-xl mx-5 sm:mx-15 p-10 flex flex-col items-center my-10 gap-10">
        <h1 className="text-[#18345c] text-4xl font-bold">
          Stay Focussed, No More Software Hopping
        </h1>
        <div className="flex flex-col-reverse sm:flex-row items-center gap-5">
          <div className="flex flex-col gap-5">
            <ul>
              <li className="text-gray-500">
                &#9679; Eliminates the need for multiple standalone systems by
                integrating essential functions into one platform.
              </li>
              <li className="text-gray-500">
                &#9679; Includes HR, payroll, accounting, bank reconciliation,
                and inventory management tools.
              </li>
              <li className="text-gray-500">
                &#9679; Provides comprehensive solutions for billing, patient
                management, pharmacy tracking, and bookkeeping.
              </li>
              <span className="text-blue-400 text-sm">Read More.</span>
            </ul>
            <Button className="bg-linear-to-r from-cyan-500 to-blue-500 text-white h-12 w-50 rounded-full text-sm">
              Schedule Demo
              <ArrowRight className="text-[#f3c21f] size-7" />
            </Button>
          </div>
          <Image
            src="/schedule-2.png"
            width={400}
            height={400}
            alt="faq-banner"
          />
        </div>
      </div>
    </>
  );
};

export default ScheduleDemo;
