import Image from "next/image";
import React from "react";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="bg-white pt-24 md:pt-28 px-6 md:px-16 lg:px-24 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        <div className="flex flex-col space-y-6 pb-12 md:pb-24">
          <div className="w-24 h-24 mb-8">
            <Image
              src="/images/logo.png"
              alt="Helping With Mom's Home Logo"
              className="rounded-full border scale-140 border-gray-200"
              width={150}
              height={150}
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-none text-black">
            We are your trusted <br />
            Mom&apos;s home buyer.
          </h1>

          <div className="space-y-4 text-xl leading-snug text-black max-w-xl">
            <p>
              So many questions! Making the decision to move Mom or Dad to
              senior living is emotional enough. But when you add the stress of
              downsizing, renovations, and selling the family home – as you know
              all too well – it can easily become overwhelming. How long will it
              take to sell? Who will clean everything out? Do we have the money
              to invest in updates? Is Mom safe until we can move? The result is
              often a delayed move-in or worse, the decision to wait altogether.
              It doesn&apos;t have to be this way. Helping with Mom&apos;s Home
              can help the process move forward and get more seniors into care
              as soon as possible. Learn more about our movement.
            </p>
          </div>

          <div className="pt-3">
            <p className="font-bold text-xl tracking-wide uppercase">
              Give us a call at (269) 217-1123, today!
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-end h-full">
          <div className="relative w-full aspect-[4/5] max-w-xl overflow-hidden rounded-t-full leading-[0] block">
            <Image
              src="/images/HomeSection/hero-img.png"
              alt="Mother and daughter looking at a laptop"
              className="w-full h-full object-cover align-bottom"
              width={600}
              height={800}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
