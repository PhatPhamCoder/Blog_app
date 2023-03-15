import React from "react";
import Link from "next/link";
import { ImFacebook, ImTwitter, ImGithub } from "react-icons/im";
import Newslatter from "./_child/newslatter";

export default function Footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };
  return (
    <footer className="bg-gray-50" style={bg}>
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div></div>
          <div className="flex gap-6 justify-center">
            <Link legacyBehavior href={"/"}>
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link legacyBehavior href={"/"}>
              <a>
                <ImTwitter color="#888888" />
              </a>
            </Link>
            <Link legacyBehavior href={"/"}>
              <a>
                <ImGithub color="#888888" />
              </a>
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            &copy; {new Date().getFullYear()} Powered By Ptech
          </p>
          <p className="text-gray-400">Điều khoản và chính sách</p>
        </div>
      </div>
    </footer>
  );
}
