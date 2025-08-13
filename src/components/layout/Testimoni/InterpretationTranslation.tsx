import Image from "next/image";
import { BsTranslate } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Framer/Variants";
import { DataProps } from "@/types/dataTranslate";
import { Carousel } from "antd";

const imageFile = [
  {
    id: 1,
    src: "/img/testimoni/InterpretationTranslation1.png",
    alt: "InterpretationTranslation",
  },
  {
    id: 2,
    src: "/img/testimoni/InterpretationTranslation2.png",
    alt: "InterpretationTranslation",
  },
  {
    id: 3,
    src: "/img/testimoni/InterpretationTranslation3.png",
    alt: "InterpretationTranslation",
  },
  {
    id: 4,
    src: "/img/testimoni/InterpretationTranslation4.png",
    alt: "InterpretationTranslation",
  },
  {
    id: 5,
    src: "/img/testimoni/InterpretationTranslation5.png",
    alt: "InterpretationTranslation",
  },
];

export default function InterpretationTranslation({ data }: DataProps) {
  return (
    <div className="flex flex-col items-start lg:flex-row-reverse gap-10 ">
      <motion.div
        variants={fadeIn("up", 0.2)} // Menambahkan argumen kedua untuk memperbaiki kesalahan
        initial={"hidden"}
        whileInView={"show"}
        className="flex flex-row-reverse items-center text-green-700 gap-5"
      >
        <BsTranslate size={50} />
        <span className="text-xl md:text-3xl lg:text-4xl  font-semibold">
          {data("Layanan.InterpretasiPenerjemah.title")}
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)} // Menambahkan argumen kedua untuk memperbaiki kesalahan
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
              className="flex relative items-center justify-center w-[300px] overflow-hidden h-[300px]  "
            >
              <Image fill quality={75} src={item.src} alt={item.alt} />
            </div>
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
}
