import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Framer/Variants";
import { DataProps } from "@/types/dataTranslate";
import { GrUserWorker } from "react-icons/gr";
import { Carousel } from "antd";

const imageFile = [
  {
    id: 1,
    src: "/img/testimoni/ConnactCompany1.jpeg",
    alt: "ConnactCompany",
  },
  {
    id: 2,
    src: "/img/testimoni/ConnactCompany2.png",
    alt: "ConnactCompany",
  },
  {
    id: 3,
    src: "/img/testimoni/ConnactCompany3.png",
    alt: "ConnactCompany",
  },
  {
    id: 4,
    src: "/img/testimoni/ConnactCompany4.png",
    alt: "ConnactCompany",
  },
  {
    id: 5,
    src: "/img/testimoni/ConnactCompany5.png",
    alt: "ConnactCompany",
  },
  {
    id: 6,
    src: "/img/testimoni/ConnactCompany6.png",
    alt: "ConnactCompany",
  },
];
export default function ConnactCompany({ data }: DataProps) {
  return (
    <div className="flex flex-col items-start lg:flex-row-reverse gap-10 ">
      <motion.div
        variants={fadeIn("up", 0.2)} // Menambahkan argumen kedua untuk memperbaiki kesalahan
        initial={"hidden"}
        whileInView={"show"}
        className="flex flex-row-reverse items-center text-green-700 gap-5"
      >
        <GrUserWorker size={50} />
        <span className="text-xl md:text-3xl lg:text-4xl  font-semibold">
          {data("Layanan.Terhubung.title")}
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
