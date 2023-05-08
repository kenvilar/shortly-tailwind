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

          <button
            id="menu-btn"
            className="block hamburger lg:hidden focus:outline-none"
            type="button"
          >
            {["top", "middle", "bottom"].map((item, idx) => {
              return <span key={idx} className={`hamburger-${item}`} />;
            })}
          </button>
        </div>

        <div
          id="menu"
          className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            {menuItems.map((item, idx) => {
              return (
                <a key={idx} href="#" className="w-full text-center">
                  {item}
                </a>
              );
            })}
            <a
              href="#"
              className="w-full pt-6 border-t border-gray-400 text-center"
            >
              Login
            </a>
            <a
              href="#"
              className="w-full py-3 text-center rounded-full bg-cyan"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
