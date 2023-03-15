/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

import Author from "./_child/author";
import fetcher from "@/lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
export default function section3() {
  const { data, isLoading, isError } = fetcher("api/popular");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <Swiper
        slidesPerView={2}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
      >
        {data?.map((value, index) => (
          <SwiperSlide>
            <Post data={value} key={index}></Post>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Post({ data }) {
  const { id, title, img, category, published } = data;
  return (
    <div className="item">
      <div className="images">
        <Link legacyBehavior href={"/"}>
          <a>
            <Image
              src={img || "unknow"}
              width={600}
              height={450}
              className="rounded-xl"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link legacyBehavior href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              {category || "unknow"}
            </a>
          </Link>
          <Link legacyBehavior href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">
              - {published || "unknow"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link legacyBehavior href={"/"}>
            <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
              {title || "unknow"}
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
