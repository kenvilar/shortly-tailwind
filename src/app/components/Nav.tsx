import Image from "next/image";
import Logo from "@/app/images/logo.svg";

const Nav = () => {
  const menuItems = ["Features", "Pricing", "Resources"];

  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            <Image src={Logo} alt="logo" />

            <div className="hidden space-x-8 font-bold lg:flex">
              {menuItems.map((item, idx) => {
                return (
                  <a
                    key={idx}
                    href="#"
                    className="text-grayishViolet hover:text-veryDarkViolet"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>

          {/*Right menu*/}
          <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
            <div className="hover:text-veryDarkViolet">Login</div>
            <a
              href="#"
              className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
            >
              Sign Up
            </a>
          </div>

          {/*todo hamburger*/}
          <button id="menu-btn"></button>
        </div>

        {/*todo mobile menu*/}
        <div id="menu"></div>
      </nav>
    </>
  );
};

export default Nav;
