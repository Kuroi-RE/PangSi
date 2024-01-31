import BreadCrumb from "../Utilities/BreadCrumb";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import Cards from "../Utilities/Cards";

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
      <div className="flex flex-wrap">
        <Tabs aria-label="Tabs with underline" style="underline">
          <Tabs.Item active title="PangSi Home" icon={FaBowlFood}>
            <div className="flex flex-row gap-4 flex-wrap justify-center">
              <Cards
                Image="/Images/Gallery/image1.jpg"
                Title="PangSi Summer"
                Description="Pangsit dengan rasa original"
                Harga={25000}
              />
              <Cards
                Image="/Images/Gallery/image1.jpg"
                Title="PangSi Summer"
                Description="Pangsit dengan rasa original"
                Harga={25000}
              />
              <Cards
                Image="/Images/Gallery/image1.jpg"
                Title="PangSi Summer"
                Description="Pangsit dengan rasa original"
                Harga={25000}
              />
              <Cards
                Image="/Images/Gallery/image1.jpg"
                Title="PangSi Summer"
                Description="Pangsit dengan rasa original"
                Harga={25000}
              />
              <Cards
                Image="/Images/Gallery/image1.jpg"
                Title="PangSi Summer"
                Description="Pangsit dengan rasa original"
                Harga={25000}
              />
              <Cards
                Image="/Images/Gallery/image1.jpg"
                Title="PangSi Summer"
                Description="Pangsit dengan rasa original"
                Harga={25000}
              />
              <Cards
                Image="/Images/Gallery/image1.jpg"
                Title="PangSi Summer"
                Description="Pangsit dengan rasa original"
                Harga={25000}
              />
              <Cards
                Image="/Images/Gallery/image1.jpg"
                Title="PangSi Summer"
                Description="Pangsit dengan rasa original"
                Harga={25000}
              />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Makanan Ringan" icon={MdDashboard}>
            <div className="flex flex-row gap-4 flex-wrap justify-center">
              <Cards
                Image="/Images/Gallery/image1.jpg"
                Title="PangSi Summer"
                Description="Pangsit dengan rasa original"
                Harga={25000}
              />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Minuman" icon={HiAdjustments}>
            <div className="flex flex-row gap-4 flex-wrap justify-center">
              <Cards
                Image="/Images/Gallery/image1.jpg"
                Title="PangSi Summer"
                Description="Pangsit dengan rasa original"
                Harga={25000}
              />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Spesial" icon={HiClipboardList}>
            <div className="flex flex-row gap-4 flex-wrap justify-center">
              <Cards
                Image="/Images/Gallery/image1.jpg"
                Title="PangSi Summer"
                Description="Pangsit dengan rasa original"
                Harga={25000}
              />
            </div>
          </Tabs.Item>
          <Tabs.Item
            disabled
            title="Western"
            data-tooltip-target="tooltip-default"
            icon={HiClipboardList}
          >
            <div
              id="tooltip-default"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Tooltip content
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            Disabled content
          </Tabs.Item>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
