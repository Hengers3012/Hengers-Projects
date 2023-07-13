import Image from "next/image";
import React from "react";
import logo from "../../public/Image/logo_elixir_cars.png";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center bg-gray-800 p-4 m-4 rounded-xl">
        <div>
          <Image
            src={logo}
            alt="Elixir Cars Logo"
            width={"200"}
            height={"100"}
          />
        </div>
        <Link href={"home"}>Home</Link>
      </nav>
    </div>
  );
}

export default Navbar;
