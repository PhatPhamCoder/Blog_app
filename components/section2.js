/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import fetcher from "@/lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
export default function section2() {
  const { data, isLoading, isError } = fetcher("api/posts");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section classname="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Lasted Post</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 px-16">
        {data?.map((value, index) => (
          <Post data={value} key={index}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, subtitle, img, published, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link legacyBehavior href={"/"}>
          <a>
            <Image src={img} width={500} height={350} className="rounded-xl" />
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
            <a className="text-gray-800 hover:text-gray-600">- {published}</a>
          </Link>
        </div>
        <div className="title">
          <Link legacyBehavior href={"/"}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{subtitle}</p>
        <h1>{author ? <Author></Author> : <></>}</h1>
      </div>
    </div>
  );
}
