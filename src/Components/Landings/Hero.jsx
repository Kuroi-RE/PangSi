// import React from "react";

const Main = () => {
  return (
    <section
      id="hero"
      className="flex items-center  bg-center bg-contain bg-[url('/Images/bg.jpg')] bg-gray-700 bg-blend-multiply"
    >
      <div className="pt-20  mt-[-7rem] md:mt-0 lg:mt-0 mx-5 md:mx-10 lg:md-10 flex flex-col gap-5">
        <h1 className="text-yellow-500 font-extrabold text-4xl md:text-6xl lg:text-8xl">
          PangCi Foods
        </h1>
        <p className="text-white mt-[-7px] max-w-[85vw] md:max-w-[60vw] text-sm md:text-lg lg:text-xl">
          <strong>Pangsit Chili Oil</strong> Yang bikin kamu senang dan kenyang!
          Coba sekarang dan rasakan keenakannya!
        </p>
        <div>
          <a href="#gallery" className="btn md:glass lg:glass btn-wide">
            Check It!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
