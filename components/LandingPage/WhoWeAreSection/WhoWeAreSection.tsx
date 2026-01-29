import Image from "next/image";
import React from "react";

const WhoWeAreSection = () => {
  return (
    <section
      id="who-we-are"
      className="py-16 px-6 md:px-16 lg:px-24 font-sans"
      style={{ backgroundColor: "#ecc055" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8 text-center">
        {/* Main Heading */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-black leading-tight">
            Trusted Mom&apos;s home buyer.
            <br />
            Trained senior transition specialist.
          </h2>
        </div>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-black font-bold">
          Our mission is simple.
        </p>

        {/* Body Paragraphs */}
        <div className="space-y-6 text-lg md:text-xl lg:text-2xl text-black max-w-3xl leading-relaxed">
          <p>
            We help families solve one of their biggest challenges in their
            journey to senior care by offering an easier, less stressful way to
            sell Mom&apos;s (or Dad&apos;s) house without cleaning it up,
            cleaning it out or paying closing fees.
          </p>

          <p>
            We purchase senior homes outright, in as-is condition so families
            can close within weeks instead of months and get Mom the care she
            needs.
          </p>
        </div>

        {/* Logo at Bottom */}
        <div className="pt-8">
          <div className="w-24 h-24 md:w-30 md:h-30">
            <Image
              src="/images/logo.png"
              alt="Helping With Mom's Home Logo"
              className="rounded-full border-2 border-gray-300"
              width={160}
              height={160}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
