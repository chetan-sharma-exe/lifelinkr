import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Faqs = () => {
  return (
    <>
      <div className="w-[90%] sm:w-[61%] bg-white rounded-xl mx-5 sm:mx-15 p-10 flex flex-col items-center mt-10 gap-10">
        <h1 className="text-[#18345c] text-5xl font-bold">FAQs</h1>
        <Image src="/faqs.png" width={1000} height={1000} alt="faq-banner" />
        <Accordion type="multiple" className="w-full mb-5 flex flex-col gap-5">
          <AccordionItem
            value="item-1"
            className="border-2 rounded-xl px-5 shadow-lg"
          >
            <AccordionTrigger className="text-xl text-[#18345c]">
              What features does LifeLinkr software include for clinics?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              LifeLinkr includes patient management, appointment scheduling,
              billing, EHR, and customizable dashboards to streamline clinic
              operations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-2 rounded-xl px-5 shadow-lg"
          >
            <AccordionTrigger className="text-xl text-[#18345c]">
              Is LifeLinkr software suitable for individual doctors?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              LifeLinkr includes patient management, appointment scheduling,
              billing, EHR, and customizable dashboards to streamline clinic
              operations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-2 rounded-xl px-5 shadow-lg"
          >
            <AccordionTrigger className="text-xl text-[#18345c]">
              How secure is patient data in LifeLinkr software?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              LifeLinkr includes patient management, appointment scheduling,
              billing, EHR, and customizable dashboards to streamline clinic
              operations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border-2 rounded-xl px-5 shadow-lg"
          >
            <AccordionTrigger className="text-xl text-[#18345c]">
              Can I customize the LifeLinkr dashboard style?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              LifeLinkr includes patient management, appointment scheduling,
              billing, EHR, and customizable dashboards to streamline clinic
              operations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="border-2 rounded-xl px-5 shadow-lg"
          >
            <AccordionTrigger className="text-xl text-[#18345c]">
              What are the pricing plans for LifeLinkr?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500">
              LifeLinkr includes patient management, appointment scheduling,
              billing, EHR, and customizable dashboards to streamline clinic
              operations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <p className="text-[#18345c] cursor-pointer hover:underline">
          Load More
        </p>
      </div>
    </>
  );
};

export default Faqs;
