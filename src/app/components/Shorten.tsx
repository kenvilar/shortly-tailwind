"use client";
const Shorten = () => {
  const linkItems = [
    {
      link: "https://kenvilar.com/",
      shortenLink: "https://bit.ly/kenvilarsite",
    },
    {
      link: "https://github.com/kenvilar",
      shortenLink: "https://bit.ly/kenvilargithub",
    },
    {
      link: "https://www.linkedin.com/in/kenvilar/",
      shortenLink: "https://bit.ly/kenvilarlinkedin",
    },
  ];

  const onSubmit = (e: any) => {
    e.preventDefault();
    const errMsg = document.getElementById("error-msg");

    if (e.target[0].value === "") {
      if (errMsg) {
        errMsg.innerHTML = "Please enter something";
        e.target[0].classList.add("border-red");
      }
    } else if (!validURL(e.target[0].value)) {
      if (errMsg) {
        errMsg.innerHTML = "Please enter a valid URL";
        e.target[0].classList.add("border-red");
      }
    } else {
      if (errMsg) {
        errMsg.innerHTML = "";
        e.target[0].classList.remove("border-red");
        alert("Success");
      }
    }
  };

  const validURL = (str: string) => {
    let pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return pattern.test(str);
  };

  return (
    <>
      <section id="shorten" className="relative bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <form
            onSubmit={onSubmit}
            id="link-form"
            action=""
            className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          >
            <input
              type="text"
              className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
              placeholder="Shorten a link here"
              id="link-input"
            />

            <button
              type="submit"
              className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2"
            >
              Shorten It!
            </button>

            {/*Error message*/}
            <div
              id="error-msg"
              className="absolute left-7 bottom-3 text-red text-sm italic"
            />
          </form>

          {/*Link 1*/}
          {linkItems.map((item, idx) => {
            return (
              <div
                key={idx}
                className="group flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
              >
                <p className="font-bold text-center text-veryDarkViolet md:text-left">
                  {item.link}
                </p>

                <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                  <div className="font-bold text-cyan">{item.shortenLink}</div>
                  <button
                    type="button"
                    className="p-2 px-8 text-white group-odd:bg-darkViolet group-even:bg-cyan rounded-lg hover:opacity-70 focus:outline-none"
                  >
                    Copy
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Shorten;
