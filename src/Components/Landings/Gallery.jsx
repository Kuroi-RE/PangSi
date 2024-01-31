import React, { lazy, Suspense } from "react";
import BreadCrumb from "../Utilities/BreadCrumb";
import Loading from "../Utilities/Loading";

const Photo = lazy(() => import("../Utilities/Photo"));

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="flex flex-col ml-3 mr-3 lg:ml-10 lg:mr-4 pt-[5.5rem]"
    >
      <div>
        <BreadCrumb Path="Foods" />
        <h1 className="ml-5 text-[4rem] redhands">Our Food</h1>
        <Suspense fallback={<Loading />}>
          <Photo />
        </Suspense>
      </div>
    </section>
  );
};

export default Gallery;
