import React from "react";
import BreadCrumb from "../Utilities/BreadCrumb";
import ErrorPage from "../Utilities/Errors/ErrorPage";

const Order = () => {
  return (
    <section
      id="order"
      className="flex flex-col ml-3 mr-3 lg:ml-10 lg:mr-4 pt-[5.5rem]"
    >
      <div className="pb-4">
        {" "}
        <BreadCrumb Path="Foods" Path2="Order" />
      </div>
      <ErrorPage reason="Nantikan terus fitur order!" />
    </section>
  );
};

export default Order;
