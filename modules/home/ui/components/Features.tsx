import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 sm:grid-rows-2 w-full sm:w-[70%] gap-5 px-15 py-10">
        <div className="flex flex-col items-center px-8 py-8 gap-2 bg-white rounded-xl">
          <Image src="/f-logo-1.png" width={55} height={55} alt="f-logo" />
          <p className="text-[#18345c] text-xl">Data Protection</p>
          <p className="text-center text-gray-500 font-varela-round">
            Protect Data Leakage With Strict Data Protect
          </p>
        </div>
        <div className="flex flex-col items-center px-6 py-8 gap-2 bg-white rounded-xl">
          <Image src="/f-logo-2.png" width={45} height={45} alt="f-logo" />
          <p className="text-[#18345c] text-xl">Built In Task Manager</p>
          <p className="text-center text-gray-500 font-varela-round">
            Never Miss a Task, Get Notified at Each Approval
          </p>
        </div>
        <div className="flex flex-col items-center px-8 py-8 gap-2 bg-white rounded-xl">
          <Image src="/f-logo-3.png" width={55} height={55} alt="f-logo" />
          <p className="text-[#18345c] text-xl">Easy Walkthrough</p>
          <p className="text-center text-gray-500 font-varela-round">
            Access Patient Info Anytime, From any Screen
          </p>
        </div>
        <div className="flex flex-col items-center px-6 py-8 gap-2 bg-white rounded-xl">
          <Image src="/f-logo-4.png" width={55} height={55} alt="f-logo" />
          <p className="text-[#18345c] text-xl">Map Patients Journey</p>
          <p className="text-center text-gray-500 font-varela-round">
            Step Linked Progression Bar to Know Milestones
          </p>
        </div>
        <div className="flex flex-col items-center px-8 py-8 gap-2 bg-white rounded-xl">
          <Image src="/f-logo-5.png" width={55} height={55} alt="f-logo" />
          <p className="text-[#18345c] text-xl">One Stop Solution</p>
          <p className="text-center text-gray-500 font-varela-round">
            No Need For Multiple Software Just Use One
          </p>
        </div>
        <div className="flex flex-col items-center px-8 py-8 gap-2 bg-white rounded-xl">
          <Image src="/f-logo-6.png" width={55} height={55} alt="f-logo" />
          <p className="text-[#18345c] text-xl">AI Integration</p>
          <p className="text-center text-gray-500 font-varela-round">
            TTS and AI Integrated to Reduce Humane Error
          </p>
        </div>
      </div>

      {/* Why Choose Us? */}
      <div className="w-[90%] sm:w-[61%] bg-white rounded-xl mx-5 sm:mx-15 p-10 flex flex-col">
        <h1 className="text-[#18345c] text-5xl font-bold">Why Choose Us?</h1>
        <div className="flex flex-col gap-5 py-5">
          <div className="flex flex-col sm:flex-row items-center p-5 gap-5 shadow-lg rounded-xl">
            <Image src="/reason-1.png" width={120} height={120} alt="reasons" />
            <div>
              <h2 className="text-[#18345c] text-xl">
                1. Seamless Patient Management
              </h2>
              <p className="text-gray-500">
                Effortlessly manage patient records, appointments,
                communications and history in a centralized, secure platform
                tailored for IVF clinics, enhancing efficiency{" "}
                <span className="text-blue-400 text-sm">Read More.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center p-5 gap-5 shadow-lg rounded-xl">
            <Image src="/reason-2.png" width={120} height={120} alt="reasons" />
            <div>
              <h2 className="text-[#18345c] text-xl">
                2. Detailed IVF Cycle Tracking
              </h2>
              <p className="text-gray-500">
                Track each stage of the IVF cycle, from egg retrieval to embryo
                transfer, with real-time updates and data-driven insights for
                better outcomes. improving decision{" "}
                <span className="text-blue-400 text-sm">Read More.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center p-5 gap-5 shadow-lg rounded-xl">
            <Image src="/reason-3.png" width={120} height={120} alt="reasons" />
            <div>
              <h2 className="text-[#18345c] text-xl">
                3. Automated Billing & Finance Integration
              </h2>
              <p className="text-gray-500">
                Streamline complex IVF billing processes with automated
                milestone-based, package billing and insurance management in one
                easy-to-use system, reducing{" "}
                <span className="text-blue-400 text-sm">Read More.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center p-5 gap-5 shadow-lg rounded-xl">
            <Image src="/reason-4.png" width={120} height={120} alt="reasons" />
            <div>
              <h2 className="text-[#18345c] text-xl">4. Lab Management</h2>
              <p className="text-gray-500">
                Optimize lab operations by tracking embryo development, managing
                cryostorage and maintaining compliance with laboratory
                standards, all while ensuring{" "}
                <span className="text-blue-400 text-sm">Read More.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center p-5 gap-5 shadow-lg rounded-xl">
            <Image src="/reason-5.png" width={120} height={120} alt="reasons" />
            <div>
              <h2 className="text-[#18345c] text-xl">
                5. Reporting & Compliance
              </h2>
              <p className="text-gray-500">
                Generate accurate, automated reports and ensure your clinic
                meets regulatory standards while tracking performance metrics
                and patient outcomes{" "}
                <span className="text-blue-400 text-sm">Read More.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits You Will Gain */}
      <div className="w-[90%] sm:w-[61%] bg-white rounded-xl mx-5 sm:mx-15 p-10 flex flex-col items-center mt-10">
        <h1 className="text-[#18345c] text-5xl font-bold">
          Benefits You Will Gain
        </h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-5 my-10">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/benefits-1.png"
              width={220}
              height={220}
              alt="benefits"
            />
            <p className="text-lg text-center">
              Optimize <span className="text-[#18345c]">Operations</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/benefits-2.png"
              width={220}
              height={220}
              alt="benefits"
            />
            <p className="text-lg text-center">
              Leverage CRM for{" "}
              <span className="text-[#18345c]">Patient Growth</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/benefits-3.png"
              width={220}
              height={220}
              alt="benefits"
            />
            <p className="text-lg text-center">
              Simplify{" "}
              <span className="text-[#18345c]">Financial Processes</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/benefits-4.png"
              width={220}
              height={220}
              alt="benefits"
            />
            <p className="text-lg text-center">
              Enhanced <span className="text-[#18345c]">Data Security</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/benefits-5.png"
              width={220}
              height={220}
              alt="benefits"
            />
            <p className="text-lg text-center">
              Simplify{" "}
              <span className="text-[#18345c]">Financial Processes</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/benefits-6.png"
              width={220}
              height={220}
              alt="benefits"
            />
            <p className="text-lg text-center">
              Forever <span className="text-[#18345c]">Medical Records</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
