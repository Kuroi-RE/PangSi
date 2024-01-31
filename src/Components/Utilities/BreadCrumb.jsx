import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const BreadCrumb = ({ Path }) => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item icon={HiHome}>Home</Breadcrumb.Item>
      <Breadcrumb.Item>{Path}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
