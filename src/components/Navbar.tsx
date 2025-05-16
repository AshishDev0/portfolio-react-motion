import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src="../../src/assets/kevinRushLogo.png" alt="logo" /> */}
        <img src={logo} className="mx-2 w-10" alt="logo" />
      </div>
      <div className="flex gap-4 items-center justify-center text-2xl">
        <a
          href="https://www.linkedin.com/in/ashish-chowdhary-67b204178"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AshishDev0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        {/* <a
          href="https://twitter.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a> */}
        {/* <a
          href="https://instagram.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
