import BreadCrumb from "../Utilities/BreadCrumb";
import { Tabs } from "flowbite-react";
import React from "react";
import { HiClipboardList } from "react-icons/hi";
// import { MdDashboard } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import Cards from "../Utilities/Cards";
import Foods from "../../assets/Database/Foods";
import ErrorPage from "../Utilities/Errors/ErrorPage";

const Menu = () => {
  return (
    <section
      id="menu"
      className="flex flex-col ml-3 mr-3 lg:ml-10 lg:mr-4 pt-[5.5rem]"
    >
      <div className="pb-4">
        {" "}
        <BreadCrumb Path="Foods" Path2="Menu" />
      </div>
      <div className="flex flex-col w-full text-center items-center">
        <h1 className="text-yellow-400 font-bold text-xl lg:text-6xl">
          Our Menu For you
        </h1>
        <p className="mt-2 text-sm">
          Semua list menu yang kami sediakan untuk anda!
        </p>
      </div>
      <div className="">
        <Tabs aria-label="Tabs with underline" style="underline">
          <Tabs.Item active title="PangSi Home" icon={FaBowlFood}>
            <div className="flex flex-row gap-4 flex-wrap">
              {Foods().pangci_menu.map((pangci, key) => {
                return (
                  <React.Fragment key={key}>
                    <Cards
                      Image={pangci.food_img}
                      Title={pangci.food_name}
                      Description={pangci.food_desc}
                      Harga={pangci.food_price}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Gyoza" icon={HiClipboardList}>
            <div className="flex flex-row gap-4 flex-wrap ">
              {Foods().gyoza_menu.map((gyoza, key) => {
                return (
                  <React.Fragment key={key}>
                    <Cards
                      Image={gyoza.food_img}
                      Title={gyoza.food_name}
                      Description={gyoza.food_desc}
                      Harga={gyoza.food_price}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </Tabs.Item>
          <Tabs.Item
            title="Western"
            data-tooltip-target="tooltip-default"
            icon={HiClipboardList}
          >
            <ErrorPage reason="Menu Belum Tersedia.. Nantikan terus!" />
          </Tabs.Item>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
