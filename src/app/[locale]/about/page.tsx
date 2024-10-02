import Contact from "@/components/layout/About/contact";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

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
                <Image src="/img/me.png" alt="me-photo" fill quality={75} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-justify max-w-2xl">
                  Sebagai CEO, saya merasa terhormat untuk memimpin perusahaan
                  yang didedikasikan sepenuhnya dalam mendukung tenaga kerja
                  Indonesia mewujudkan impian mereka berkarier di Jepang. Di
                  IGM, kami percaya bahwa setiap orang berhak mendapatkan
                  kesempatan untuk berkembang dan mencapai kesuksesan, tidak
                  hanya bagi diri mereka sendiri tetapi juga bagi keluarga dan
                  masyarakat yang lebih luas.
                </p>
                <p className="text-sm text-justify max-w-2xl">
                  Visi kami sederhana namun kuat: menjembatani dunia kerja
                  internasional dengan menyediakan layanan yang menyeluruh,
                  mulai dari pengurusan visa hingga perpindahan karier, serta
                  mendukung adaptasi bahasa dan budaya Jepang. Kami berkomitmen
                  untuk memberikan solusi yang tepat dan dukungan berkelanjutan,
                  karena kami memahami bahwa proses ini tidak selalu mudah.
                  Namun, melalui dedikasi dan kerja keras, kami percaya bahwa
                  bersama-sama, kita bisa meraih kesuksesan.
                </p>
                <p className="text-sm text-justify max-w-2xl">
                  Melalui filosofi kerja kami yang berbasis pada kepercayaan,
                  keahlian, dan kerja sama yang saling menguntungkan, IGM
                  bertekad menjadi mitra terpercaya yang membantu Anda mencapai
                  tujuan profesional dan pribadi di Jepang. Kami terus berupaya
                  meningkatkan layanan kami agar selalu relevan dan tepat
                  sasaran, memastikan bahwa setiap langkah yang Anda ambil
                  bersama kami adalah langkah menuju masa depan yang lebih baik.
                </p>
                <p className="text-sm text-justify max-w-2xl">
                  Terima kasih telah mempercayakan perjalanan Anda kepada kami.
                  Kami siap mendampingi Anda dalam setiap langkah untuk meraih
                  karier dan kehidupan yang lebih baik di Jepang.
                </p>
                <div className="flex flex-col pt-5">
                  <span>Anidika Pramana</span>
                  <span>CEO, Inka Global Management (IGM)</span>
                </div>
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
              <div className="flex items-center gap-2">
                <IoLocationSharp size={20} />
                <span className="text-sm">
                  〒 533-0023 大阪府大阪市東淀川区東淡路4丁目17-15
                  岩瀬スペース213号室
                </span>
              </div>
            </div>
          </div>

          <Contact />
        </div>
      </div>
    </div>
  );
}
