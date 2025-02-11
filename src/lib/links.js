import { TiHome } from "react-icons/ti";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoCodeWorking } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const links = [
  {
    name: "home",
    path: "/",
    logo: TiHome,
  },
  {
    name: "services",
    path: "/services",
    logo: RiCustomerService2Fill,
  },
  {
    name: "resume",
    path: "/resume",
    logo: MdWork,
  },
  {
    name: "work",
    path: "/work",
    logo: IoCodeWorking,
  },
  {
    name: "contact",
    path: "/contact",
    logo: IoMdContact,
  },
];

export default links;
