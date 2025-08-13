import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Framer/Variants";
import { DataProps } from "@/types/dataTranslate";
import { IoMdSchool } from "react-icons/io";
import { Carousel } from "antd";

const imageFile = [
  {
    id: 1,
    src: "/img/testimoni/JapanaeseLanguageShool1.png",
    alt: "JapanaeseLanguageShool",
  },
  {
    id: 2,
    src: "/img/testimoni/JapanaeseLanguageShool2.jpeg",
    alt: "JapanaeseLanguageShool",
  },

  {
    id: 3,
    src: "/img/testimoni/JapanaeseLanguageShool3.png",
    alt: "JapanaeseLanguageShool",
  },
  {
    id: 4,
    src: "/img/testimoni/JapanaeseLanguageShool4.png",
    alt: "JapanaeseLanguageShool",
  },
];

export default function JapanaeseLanguageShool({ data }: DataProps) {
  return (
    <div className="flex flex-col items-start  lg:flex-row gap-10 w-full overflow-hidden ">
      <motion.div
        variants={fadeIn("up", 0.2)} // Menambahkan argumen kedua untuk memperbaiki kesalahan
        initial={"hidden"}
        whileInView={"show"}
        className="flex flex-row items-center text-green-700 gap-5"
      >
        <IoMdSchool size={50} />
        <span className="text-xl md:text-3xl lg:text-4xl  font-semibold">
          {data("Layanan.SekolahBahasaJepang.title")}
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)} // Menambahkan argumen kedua untuk memperbaiki kesalahan
        initial={"hidden"}
        whileInView={"show"}
      >
        <Carousel
          arrows
          autoplay
          draggable
          className="w-[300px]  h-max overflow-hidden"
        >
          {imageFile.map((item) => (
            <div
              key={item.id}
              className="flex relative items-center justify-center w-[300px] overflow-hidden h-[400px]  "
            >
              <Image fill quality={75} src={item.src} alt={item.alt} />
            </div>
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
}
