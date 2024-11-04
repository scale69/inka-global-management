import { useTranslations } from "next-intl";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import Markdown from "./Markdown";
import Link from "next/link";

export default function Page() {
  const data = useTranslations("data");

  return (
    <div className="flex flex-col items-center justify-center py-28 w-full h-full">
      <div
        id="about"
        className=" w-full gap-10 flex flex-col justify-center items-center h-full  "
      >
        <h1 className="w-full text-center text-3xl font-semibold">
          {data("Link.About")}
        </h1>
        <div className="flex flex-col w-full gap-20 h-full ">
          <div className="space-y-5 flex flex-col justify-center items-center w-full  p-5">
            <h2 className="w-full text-center text-2xl font-semibold">
              {data("Filosofi.title")}
            </h2>
            <p className="text-sm text-justify max-w-2xl">
              {data("Filosofi.description")}
            </p>
          </div>
          <div className="space-y-10 bg-slate-50 dark:bg-black w-full py-20 px-5 md:px-10">
            <h2 className="w-full text-center text-2xl font-semibold">
              ご﻿挨﻿拶
            </h2>
            <div className="flex flex-col items-center justify-center lg:flex-row gap-10 w-full">
              <div className="relative w-60 h-60 md:w-96 md:h-96 rounded-full shadow-md overflow-hidden">
                <Image
                  src="/img/profile-me.jpeg"
                  alt="me-photo"
                  fill
                  quality={75}
                  className="object-cover"
                />
              </div>
              <div className="text-sm text-justify max-w-2xl porse">
                <Markdown isi={data("CEO_Message")} />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 w-full  h-full p-5">
            <h2 className="w-full text-center text-2xl font-semibold">
              アクセ﻿ス﻿マ﻿ッ﻿プ
            </h2>
            <iframe
              className="w-full md:max-w-3xl h-[300px]"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3278.6619590688974!2d135.5146946117042!3d34.738914272793075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zNTMzLTAwMjMg5aSn6Ziq5bqc5aSn6Ziq5biC5p2x5reA5bed5Yy65p2x5reh6LevNOS4geebrjE3LTE1IOWyqeeArOOCueODmuODvOOCuTIxM-WPt-WupA!5e0!3m2!1sid!2sjp!4v1727453581945!5m2!1sid!2sjp"
              loading="lazy"
            ></iframe>
            <div>
              <Link
                href="https://maps.app.goo.gl/AUYSpJPhkdYoL19AA"
                target="_blank"
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <IoLocationSharp size={20} />
                <span className="text-sm">
                  〒 533-0023 大阪府大阪市東淀川区東淡路4丁目17-15
                  岩瀬スペース213号室
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
