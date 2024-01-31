import { Card } from "flowbite-react";

const Cards = ({ Image, Title, Description, Harga }) => {
  return (
    <div>
      <Card
        className="max-w-sm"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={`${Image}`}
      >
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {Title ? Title : "No Title"}
          </h5>
        </a>
        <div className="mb-5 mt-2.5 flex items-center">
          {Description ? Description : "No Description"}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {`${Harga ? Harga : "0"}` + "rp"}
          </span>
          <a
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add to cart
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Cards;