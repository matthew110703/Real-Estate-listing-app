import { Link } from "react-router-dom";
// UI
import { Branding, CustomLink } from "../ui";
// Icons
import { RiInstagramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
// Constants
import { quickLinks } from "../../lib/constants";

const Footer = () => {
  const socialIcons = {
    facebook: <FaFacebookF />,
    twitter: <FaXTwitter />,
    instagram: <RiInstagramLine />,
    linkedin: <FaLinkedinIn />,
  };

  return (
    <footer className="mx-auto mt-6 space-y-6 p-3 md:p-6">
      <div className="flex flex-col-reverse justify-between gap-6 lg:flex-row">
        <Branding />
        {/* Quick Links */}
        <nav className="flex w-full justify-around">
          <div className="space-y-4">
            {/* Menu Links */}
            <ul>
              <li className="text-xs">Menu</li>
              {quickLinks?.menu?.map((link) => (
                <li key={link}>
                  <CustomLink label={link} />
                </li>
              ))}
            </ul>

            {/* Legal & Policies links */}
            <ul>
              <li className="text-xs">Legal & Policies</li>
              {quickLinks?.legal?.map((link) => (
                <li key={link}>
                  <CustomLink label={link} />
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {/* Info Links */}
            <ul>
              <li className="text-xs">Info</li>
              {quickLinks?.info?.map((link) => (
                <li key={link}>
                  <CustomLink label={link} />
                </li>
              ))}
            </ul>

            {/* Agents links */}
            <ul>
              <li className="text-xs">Agents</li>
              {quickLinks?.agents?.map((link) => (
                <li key={link}>
                  <CustomLink label={link} />
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {/* Help links */}
            <ul>
              <li className="text-xs">Help</li>
              {quickLinks?.help?.map((link) => (
                <li key={link}>
                  <CustomLink label={link} />
                </li>
              ))}
            </ul>

            {/* Contacts */}
            <ul>
              <li className="text-xs">Contacts</li>
              {quickLinks?.contacts?.map((link) => (
                <li key={link}>
                  <CustomLink label={link} />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="space-y-2 text-center">
        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {quickLinks?.social?.map((link) => (
            <Link to={"#"} key={link} className="h-8 w-8">
              {socialIcons[link]}
            </Link>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
