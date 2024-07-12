import Image from "next/image";
import Link from "next/link";
import AuthCondition from "../auth/AuthCondition";
import Logo from "/public/assets/icon.png";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image
              src={Logo}
              width={45}
              height={45}
              alt="Eventry"
              className="ring-2 ring-offset-2 rounded-full ring-blue-500"
            />
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>
            <AuthCondition />
          </li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
