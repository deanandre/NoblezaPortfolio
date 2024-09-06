import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 max-[640px]:mb-0">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="font-semibold text-3xl max-[640px]:text-xl">
          Dean.<span className="text-accent">dev</span>
        </h1>
      </div>
      <div className="my-8 flex items-center justify-center gap-4 text-2xl max-[640px]:text-xl">
        <a
          href="https://www.linkedin.com/in/dean-andre-nobleza-25a682180/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-accent cursor-pointer transition-transform transform hover:scale-125 duration-300" />
        </a>
        <a
          href="https://github.com/deanandre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-accent cursor-pointer transition-transform transform hover:scale-125 duration-300" />
        </a>
        <a
          href="https://www.facebook.com/dean.nobleza.9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="hover:text-accent cursor-pointer transition-transform transform hover:scale-125 duration-300" />
        </a>
        <a
          href="https://www.instagram.com/dzeenuu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-accent cursor-pointer transition-transform transform hover:scale-125 duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
