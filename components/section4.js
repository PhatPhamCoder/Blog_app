/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import fetcher from "@/lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
export default function section4() {
  const { data, isLoading, isError } = fetcher("api/popular");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item-left">
          <h1 className="font-bold text-4xl py-12 text-center">Business</h1>
          <div className="flex flex-col gap-6">
            {data[1] ? <Post data={data[1]}></Post> : <></>}
            {data[2] ? <Post data={data[2]}></Post> : <></>}
            {data[3] ? <Post data={data[3]}></Post> : <></>}
          </div>
        </div>
        <div className="item-right">
          <h1 className="font-bold text-4xl py-12 text-center">Travel</h1>
          <div className="flex flex-col gap-6">
            {data[4] ? <Post data={data[4]}></Post> : <></>}
            {data[5] ? <Post data={data[5]}></Post> : <></>}
            {data[2] ? <Post data={data[2]}></Post> : <></>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, img, category, published } = data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link legacyBehavior href={"/"}>
          <a>
            <Image
              src={img || "No Image"}
              width={400}
              height={250}
              className="rounded-xl"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col pb-4">
        <div className="cat">
          <Link legacyBehavior href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">{category}</a>
          </Link>
          <Link legacyBehavior href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">- {published}</a>
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
