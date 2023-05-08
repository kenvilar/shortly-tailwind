import Image from "next/image";
import Recognition from "@/app/images/icon-brand-recognition.svg";
import Records from "@/app/images/icon-detailed-records.svg";
import Customizable from "@/app/images/icon-fully-customizable.svg";

const Features = () => {
  const boxItems = [
    {
      icon: Recognition,
      title: "Brand Recognition",
      desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
    },
    {
      icon: Records,
      title: "Detailed records",
      desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      icon: Customizable,
      title: "Fully customizable",
      desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  return (
    <>
      <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/*horizontal line*/}
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block" />
          {/*vertical line*/}
          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden" />

          {/*box item*/}
          {boxItems.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`relative flex flex-col ${
                  idx !== 0 ? "mt-24" : ""
                } p-6 space-y-6 bg-white rounded-lg ${
                  idx !== 0 ? "md:mt-8" : idx === 2 ? "md:mt-16" : ""
                } md:w-1/3`}
              >
                <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                  <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                    <Image src={item.icon} alt="box item image" />
                  </div>
                </div>
                <h5 className="pt-6 text-xl font-bold text-center capitalize">
                  {item.title}
                </h5>
                <p className="text-center text-gray-400 md:text-left">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
