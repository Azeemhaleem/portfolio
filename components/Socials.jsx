import Link from "next/link";

import {
  RiYoutubeLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

import { SiGmail } from "react-icons/si";

export const socialData = [
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com",
  //   Icon: RiYoutubeLine,
  // },
  {
    name: "Gmail",
    link: "mailto:azeemhaleem451@gmail.com",
    Icon: SiGmail,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: RiFacebookLine,
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/qr/EEQ2GILDDRGNK1",
    Icon: RiWhatsappLine,
  },
  {
    name: "LinkedIn",
    link: "http://linkedin.com/in/azeemhaleem",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/Azeemhaleem",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${social.name === "Github"
            ? "bg-accent rounded-full p-[5px] hover:text-white"
            : "hover:text-accent"
            } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
