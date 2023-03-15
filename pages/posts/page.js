/* eslint-disable jsx-a11y/alt-text */
import Format from "@/layout/format";
import Author from "@/components/_child/author";
import Image from "next/image";
import Related from "@/components/_child/related";
export default function Page() {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Life is a precious gift. Cherish every moment and make the most of
            every opportunity.
          </h1>
          <p className="text-gray-500 text-xl text-center">
            Life is a precious gift. Cherish every moment and make the most of
            every opportunity.
          </p>

          <div className="py-10">
            <Image
              src={"/images/img1.jpg"}
              width={600}
              height={600}
              className="rounded-xl mx-auto"
            />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              Life is a journey full of twists and turns. It’s a precious gift
              that we should cherish every day. Whether we’re laughing or
              crying, we’re alive, and that’s something to be grateful for. Life
              is about taking risks, making mistakes, and learning from them.
              It’s about finding joy in the little things and making the most of
              every opportunity. Life is short, so we should live it to the
              fullest. We should surround ourselves with people who love us and
              support us, and we should never take a single day for granted.
            </p>
            <p>
              Life is a journey full of twists and turns. It’s a precious gift
              that we should cherish every day. Whether we’re laughing or
              crying, we’re alive, and that’s something to be grateful for. Life
              is about taking risks, making mistakes, and learning from them.
              It’s about finding joy in the little things and making the most of
              every opportunity. Life is short, so we should live it to the
              fullest. We should surround ourselves with people who love us and
              support us, and we should never take a single day for granted.
            </p>
            <p>
              Life is a journey full of twists and turns. It’s a precious gift
              that we should cherish every day. Whether we’re laughing or
              crying, we’re alive, and that’s something to be grateful for. Life
              is about taking risks, making mistakes, and learning from them.
              It’s about finding joy in the little things and making the most of
              every opportunity. Life is short, so we should live it to the
              fullest. We should surround ourselves with people who love us and
              support us, and we should never take a single day for granted.
            </p>
            <p>
              Life is a journey full of twists and turns. It’s a precious gift
              that we should cherish every day. Whether we’re laughing or
              crying, we’re alive, and that’s something to be grateful for. Life
              is about taking risks, making mistakes, and learning from them.
              It’s about finding joy in the little things and making the most of
              every opportunity. Life is short, so we should live it to the
              fullest. We should surround ourselves with people who love us and
              support us, and we should never take a single day for granted.
            </p>
          </div>
        </div>

        <Related></Related>
      </section>
    </Format>
  );
}
