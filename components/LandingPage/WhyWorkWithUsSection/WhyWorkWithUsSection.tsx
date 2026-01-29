import React from "react";

const WhyWorkWithUsSection = () => {
  const comparisonData = [
    { concern: "Commission & Fees", agent: "6% Average", helping: "None" },
    { concern: "Closing Cost", agent: "4-6% Average", helping: "None" },
    {
      concern: "Average Closing Time",
      agent: "45-60 Days",
      helping: "You pick!",
    },
    {
      concern: "Payment for Repairs",
      agent: "Varies/Negotiated",
      helping: "None",
    },
    { concern: "Home Showings", agent: "Multiple", helping: "One — just us!" },
    { concern: "Appraisal Needed", agent: "Yes — often!", helping: "Never" },
    { concern: "Home Inspection", agent: "Yes — required!", helping: "None" },
  ];

  return (
    <section
      id="why-work-with-us"
      className="bg-[#808285] py-20 px-6 md:px-16 lg:px-24 font-sans text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-serif text-[#f1c40f] text-center mb-12">
          Why work with us? Compare!
        </h2>

        {/* Comparison Table */}
        <div className="overflow-hidden border border-white rounded-sm">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-[#eebc51] text-white">
                <th className="py-4 px-2 md:py-6 border-r border-white font-normal text-lg md:text-2xl">
                  Common Concerns
                </th>
                <th className="py-4 px-2 md:py-6 border-r border-white font-normal text-lg md:text-2xl">
                  Traditional Agent
                </th>
                <th className="py-4 px-2 md:py-6 font-normal text-lg md:text-2xl">
                  Helping with Mom&apos;s Home
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#6d6e71]">
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-t border-white">
                  <td className="py-4 px-2 md:py-5 border-r border-white text-sm md:text-lg">
                    {row.concern}
                  </td>
                  <td className="py-4 px-2 md:py-5 border-r border-white text-sm md:text-lg">
                    {row.agent}
                  </td>
                  <td className="py-4 px-2 md:py-5 text-sm md:text-lg">
                    {row.helping}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
