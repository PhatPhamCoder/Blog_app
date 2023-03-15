/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

export default function section2() {
  return (
    <section classname="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Lasted Post</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 px-16">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link legacyBehavior href={"/"}>
          <a>
            <Image
              src={"/images/img2.jpg"}
              width={500}
              height={350}
              className="rounded-xl"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link legacyBehavior href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              Business, travel
            </a>
          </Link>
          <Link legacyBehavior href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">- April, 3 2023</a>
          </Link>
        </div>
        <div className="title">
          <Link legacyBehavior href={"/"}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customer are your greatest source of learning
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Nearly four months after OpenAI stunned the tech industry with
          ChatGPT, the company is releasing its next-generation version of the
          technology that powers the viral chatbot tool.
        </p>
        <h1>
          <Author></Author>
        </h1>
      </div>
    </div>
  );
}
