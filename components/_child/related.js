/* eslint-disable jsx-a11y/alt-text */
import fetcher from "@/lib/fetcher";
import Image from "next/image";
import Link from "next/link";
import Author from "./author";
import Error from "./error";
import Spinner from "./spinner";
export default function Related() {
  const { data, isLoading, isError } = fetcher("api/popular");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <section className="pt-20">
      <div>
        <h1 className="font-bold text-3xl py-10">Top Relate</h1>
        <div className="flex flex-col gap-10">
          {data?.map((value, index) => (
            <Post data={value} key={index}></Post>
          ))}
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, img, category, published, author } = data;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start md:flex-wrap">
        <Link legacyBehavior href={`/posts/${id}`}>
          <a>
            <Image
              src={img || ""}
              width={300}
              height={200}
              className="rounded-xl"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col pb-4">
        <div className="cat">
          <Link legacyBehavior href={`/posts/${id}`}>
            <a className="text-orange-600 hover:text-orange-800">{category}</a>
          </Link>
          <Link legacyBehavior href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">- {published}</a>
          </Link>
        </div>
        <div className="title">
          <Link legacyBehavior href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title}
            </a>
          </Link>
        </div>
        <h1>{author ? <Author {...author}></Author> : <></>}</h1>
      </div>
    </div>
  );
}
