// import React from "react";
import { Navbar } from "flowbite-react";

const TopBar = () => {
  return (
    <Navbar fluid className="fixed w-full z-20 top-0 start-0">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/Images/logos.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PangSi
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#gallery">Gallery</Navbar.Link>
        <Navbar.Link href="#menu">Menu</Navbar.Link>
        <Navbar.Link href="#order">Order</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
