import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 812 2914 8974",
    path: "https://wa.me/6281229148974",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mohammadtegaribrahim@gmail.com",
    path: "mailto:mohammadtegaribrahim@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Kudus, Jawa Tengah, Indonesia",
    path: "https://www.google.com/maps/place/Kudus,+Jawa+Tengah,+Indonesia",
  },
];
