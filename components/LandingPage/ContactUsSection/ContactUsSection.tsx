import Image from "next/image";
import ContactForm from "./ContactForm";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";

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
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/helpingwithmomshome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#eebc51] rounded-lg flex items-center justify-center border-2 border-[#eebc51] hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/helpingwithmomshome/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#eebc51] rounded-lg flex items-center justify-center border-2 border-[#eebc51] hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </a>
                <a
                  href="https://share.google/MdH7sKPH2pkPcvo7t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 bg-[#eebc51] rounded-lg flex items-center justify-center border-2 border-[#eebc51] hover:opacity-80 transition-opacity"
                  aria-label="Google"
                >
                  <FaGoogle className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </a>
              </div>
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
