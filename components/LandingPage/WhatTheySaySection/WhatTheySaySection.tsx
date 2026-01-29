import Image from "next/image";
import React from "react";

const WhatTheySaySection = () => {
  return (
    <section
      id="what-they-say"
      className="bg-[#f4f6fc] pt-16 px-6 md:px-16 lg:px-24 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        {/* Left Content Column: Testimonials */}
        <div className="flex flex-col space-y-10 pb-16">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-black">
            See what our clients <br /> have to say
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-black max-w-xl">
            {/* Testimonial 1 */}
            <div className="space-y-4">
              <p>
                &quot;My father passed away in February. He had lived in his
                house for 20 years, and it needed updating. Selling to Helping
                with Mom&apos;s Home was smooth sailing...almost too good to be
                true! We would highly recommend Helping with Mom&apos;s Home,
                especially when there has been a death in the family. We just
                wanted to move on. Listing it would have taken more time and
                created more bills. Selling to Helping with Mom&apos;s Home
                saved me 6 months of work. It was quick and painless!&quot;
              </p>
              <p className="font-bold">— The Millers Family</p>
            </div>

            {/* Testimonial 2 */}
            <div className="space-y-4">
              <p>
                &quot;I chose Helping with Mom&apos;s Home because I was
                referred by a lady at the assisted living facility where my dad
                is and we needed to have a quick close and go on and get things
                taken care of. This really was a good experience. They did
                everything they could to help me out and get through this as
                easily as possible. It was kind of a stressful thing that turned
                out to be pretty good.&quot;
              </p>
              <p className="font-bold">— Maria</p>
            </div>
          </div>
        </div>

        {/* Right Column: Arched Image with Logo Overlay */}
        <div className="relative flex justify-center items-end h-full">
          <div className="relative w-full aspect-[4/5] max-w-xl">
            {/* The Arch Container */}
            <div className="w-full h-full overflow-hidden">
              <Image
                src="/images/WhatTheySaySection/what-say.png" // Replace with your image path
                alt="Two men smiling"
                className="w-full h-full object-cover"
                width={600}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatTheySaySection;
