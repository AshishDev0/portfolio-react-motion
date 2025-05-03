import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src="../../src/assets/kevinRushLogo.png" alt="logo" /> */}
        <img src={logo} className="mx-2 w-10" alt="logo" />
      </div>
      <div className="flex gap-4 items-center justify-center text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
}

export default Navbar
