// import React from "react";

const Main = () => {
  return (
    <section
      id="hero"
      className="bg-center bg-contain bg-[url('Images/bg.jpg')] bg-gray-700 bg-blend-multiply"
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-72 lg:py-56">
        <h1 className="namecat mb-4 text-5xl tracking-wide font-extrabold leading-none text-white md:text-7xl lg:text-[10rem]">
          &lt; PangSi &gt;
        </h1>
        <p className="namecat mb-8 text-lg font-normal text-gray-300 lg:text-4xl mt-[-1.5rem] sm:px-16 lg:px-48">
          Pangsit Chili Oil
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#gallery"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Our Foods
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
