import NavigationSection from "@/components/LandingPage/NavigationSection/NavigationSection";
import HomeSection from "@/components/LandingPage/HomeSection/HomeSection";
import WhoWeAreSection from "@/components/LandingPage/WhoWeAreSection/WhoWeAreSection";
import WhatWeDoSection from "@/components/LandingPage/WhatWeDoSection/WhatWeDoSection";
import WhyWorkWithUsSection from "@/components/LandingPage/WhyWorkWithUsSection/WhyWorkWithUsSection";
import WhatTheySaySection from "@/components/LandingPage/WhatTheySaySection/WhatTheySaySection";
import ContactUsSection from "@/components/LandingPage/ContactUsSection/ContactUsSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <NavigationSection />
      <HomeSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <WhatTheySaySection />
      <WhyWorkWithUsSection />
      <ContactUsSection />
    </div>
  );
}
