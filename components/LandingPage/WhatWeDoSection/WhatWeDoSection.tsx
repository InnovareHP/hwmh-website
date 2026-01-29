import Image from "next/image";
import React from "react";

const WhatWeDoSection = () => {
  const advantages = [
    {
      src: "/images/WhatWeDoSection/what-we-do-1.jpg",
      alt: "Old yellow house",
      text: "We purchase senior homes outright — in as-is condition.",
    },
    {
      src: "/images/WhatWeDoSection/what-we-do-2.jpg",
      alt: "Three women talking",
      text: "Families can close in weeks instead of months.",
    },
    {
      src: "/images/WhatWeDoSection/what-we-do-3.jpg",
      alt: "Room full of books and clutter",
      text: 'We take care of all "the stuff."',
    },
  ];

  return (
    <section
      id="what-we-do"
      className="bg-[#a6a6a6] py-20 px-6 md:px-16 lg:px-24 text-white font-sans"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Header with Logo */}
        <div className="flex items-center justify-start space-x-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic">
            The
          </h2>
          <div className="w-20 h-20 md:w-28 md:h-28">
            <Image
              src="/images/logo.png"
              alt="Helping With Mom's Home Logo"
              width={120}
              height={120}
              className="rounded-full bg-white p-1"
            />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">
            Advantage
          </h2>
        </div>

        {/* Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-6"
            >
              {/* Arched Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-4xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Description Text */}
              <p className="text-lg md:text-2xl leading-relaxed max-w-[250px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
