import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className=" gap-10 p-8 w-full fixed sm:static ">
      <div className="flex justify-center gap-5 ">
        <i className="text-cyan-800 p-2 rounded-2xl border border-zinc-800">
          <FaFacebookF />
        </i>
        <i className="text-cyan-800 p-2 rounded-2xl border border-zinc-800">
          <FaTwitter />
        </i>
        <i className="text-cyan-800 p-2 rounded-2xl border border-zinc-800">
          <FaInstagram />
        </i>
      </div>
      <div>
        <p className="pt-5 text-zinc-800 text-center ">© Copyright Ping. All rights reserved</p>
      </div>
    </footer>
  );
}
