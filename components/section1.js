/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

export default function section1() {
  SwiperCore.use([Autoplay]);
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 5000,
          }}
          loop={true}
        >
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link legacyBehavior href={"/"}>
          <a>
            <Image
              src={"/images/img1.jpg"}
              width={600}
              height={600}
              className="rounded-xl"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
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
