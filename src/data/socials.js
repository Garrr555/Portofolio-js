import {
  FaGithub,
  FaVoicemail,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

import {MdEmail} from 'react-icons/md'

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Garrr555?tab=repositories" },
  { icon: <FaWhatsapp />, path: "https://wa.me/6281229148974" },
  { icon: <FaInstagram />, path: "https://instagram.com/moh_garrr" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/mohammad-tegar-ibrahim-3210b1285/",
  },
  { icon: <FaTelegram />, path: "https://t.me/MohGarrr" },
  { icon: <MdEmail />, path: "mailto:mohammadtegaribrahim@gmail.com" },
];


export default socials;