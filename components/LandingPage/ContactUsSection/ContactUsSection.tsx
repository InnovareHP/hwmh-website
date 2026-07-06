import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
// Removed { FaFacebook } import due to module not found error

const ContactUsSection = () => {
  return (
    <section
      id="contact-us"
      className="bg-white pt-12 md:pt-16 px-6 md:px-8 lg:px-[5%] font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-6 pb-12">
          {/* Body Text */}
          <div className="space-y-4 text-base md:text-xl lg:text-2xl leading-snug text-black max-w-6xl mx-auto">
            <p>
              Transitioning to senior care can be a difficult decision, but
              sometimes it becomes necessary to ensure the well-being and safety
              of our loved ones. In order to provide the best possible care for
              them, you may have decided to sell their house. This decision,
              while emotionally challenging, can offer financial resources to
              support them in a senior care facility or cover the costs of
              in-home care services. By selling their house, you are taking
              proactive steps to ensure that they receive the necessary
              assistance, medical attention, and support tailored to their
              needs. It&apos;s important to approach this transition with
              empathy, understanding, and thorough research to find the most
              suitable senior care options that will provide them with the
              comfort, companionship, and specialized care they deserve in this
              new chapter of their lives.
            </p>
            <p className="font-bold">
              If you or a family you know is needing to sell a house, schedule a
              no cost consultation with one of our senior transition specialists
              today! Connect with us by filling out our contact form.
            </p>
          </div>

          {/* Contact Details and Image Section */}
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 pt-12">
            {/* Contact Info */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-32 relative">
                <Image
                  src="/images/logo.png"
                  alt="Helping With Mom's Home Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#eebc51]">
                Connect with us
              </h2>
              <div className="text-gray-600 text-lg md:text-xl space-y-1">
                <p>PO Box 2643, Kalamazoo, MI</p>
                <p>(269) 217-1123</p>
                <p>hello@helpingwithmomshome.com</p>
              </div>
              <a
                href="https://www.facebook.com/helpingwithmomshome"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-[#eebc51] rounded-lg flex items-center justify-center border-2 border-[#eebc51] hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            {/* Senior Couple Image */}
            <div className="relative w-full max-w-lg mt-8 md:mt-0">
              <Image
                src="/images/ContactUsSection/contact-img.png"
                alt="Senior couple holding a small model house"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* Secure contact form (Resend-backed) */}
          <div className="pt-12 pb-8">
            <div className="max-w-3xl mx-auto">
              <div className="w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
