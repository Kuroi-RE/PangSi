import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useEffect, useState } from "react";

const BreadCrumb = ({ Path, Path2 }) => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item icon={HiHome}>Home</Breadcrumb.Item>
      <Breadcrumb.Item>{Path}</Breadcrumb.Item>
      {Path2 ? <Breadcrumb.Item>{Path2}</Breadcrumb.Item> : <p></p>}
    </Breadcrumb>
  );
};

export default BreadCrumb;
