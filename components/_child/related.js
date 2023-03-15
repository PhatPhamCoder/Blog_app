/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import Author from "./author";
export default function Related() {
  return (
    <section className="pt-20">
      <div>
        <h1 className="font-bold text-3xl py-10">Top Relate</h1>
        <div className="flex flex-col gap-10">
          {Post()}
          {Post()}
          {Post()}
          {Post()}
        </div>
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link legacyBehavior href={"/"}>
          <a>
            <Image
              src={"/images/img5.png"}
              width={300}
              height={200}
              className="rounded-xl"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col pb-4">
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
        <h1>
          <Author></Author>
        </h1>
      </div>
    </div>
  );
}
