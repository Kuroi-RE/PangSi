import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const BreadCrumb = ({ Path = String, Path2 = String }) => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item icon={HiHome}>Home</Breadcrumb.Item>
      <Breadcrumb.Item>{Path}</Breadcrumb.Item>
      {Path2 ? <Breadcrumb>{Path2}</Breadcrumb> : ""}
    </Breadcrumb>
  );
};

export default BreadCrumb;
