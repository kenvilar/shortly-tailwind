import Image from "next/image";
import Logo from "@/app/images/logo.svg";

const Footer = () => {
  const featuresMenu = ["Link shortening", "Branded links", "Analytics"];
  const resourcesMenu = ["Blog", "Developers", "Support"];
  const companyMenu = ["About", "Our Team", "Careers", "Contact"];

  return (
    <>
      <footer className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          <Image src={Logo} alt="logo" />

          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            {/*Features Menu*/}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Features
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                {featuresMenu.map((item, idx) => {
                  return (
                    <a
                      key={idx}
                      href="#"
                      className="capitalize text-grayishViolet hover:text-cyan"
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>

            {/*Resources Menu*/}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Resources
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                {resourcesMenu.map((item, idx) => {
                  return (
                    <a
                      key={idx}
                      href="#"
                      className="capitalize text-grayishViolet hover:text-cyan"
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>

            {/*Company Menu*/}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Company
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                {companyMenu.map((item, idx) => {
                  return (
                    <a
                      key={idx}
                      href="#"
                      className="capitalize text-grayishViolet hover:text-cyan"
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
