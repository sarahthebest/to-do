import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar sticky w-full h-20 flex px-10 gap-10">
      {/* Add links by adding a <Link> to the nav  */}
      <Link href="/dashboard" className="text-lg">
        Dashboard
      </Link>
      <Link href="/" className="text-lg">
        Home
      </Link>
    </nav>
  );
};

export default Nav;
