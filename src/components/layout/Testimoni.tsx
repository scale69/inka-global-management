"use client";
import { FaBuildingUser } from "react-icons/fa6";
import Image from "next/image";
import { BsTranslate } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Framer/Variants";
import { useTranslations } from "next-intl";

export default function Testimoni() {
  const data = useTranslations("data");
  return (
    <div className="flex flex-col gap-10    pb-10 items-center justify-center w-full h-full py-20 bg-white  dark:bg-black overflow-hidden">
      <h1
        id="testimoni"
        className="text-4xl md:text-3xl lg:text-4xl  w-full  font-semibold text-center pb-20  "
      >
        {data("Link.Galery")}
      </h1>
      <div id="galery" className="flex flex-col  gap-20  overflow-hidden ">
        <div className="flex flex-col items-start lg:flex-row gap-10 ">
          <motion.div
            variants={fadeIn("up", 0.2)} // Menambahkan argumen kedua untuk memperbaiki kesalahan
            initial={"hidden"}
            whileInView={"show"}
            className="flex items-center text-green-700 gap-5"
          >
            <FaBuildingUser size={50} />
            <span className="text-3xl font-semibold">
              {data("Layanan.StudiBunding.title")}
            </span>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)} // Menambahkan argumen kedua untuk memperbaiki kesalahan
            initial={"hidden"}
            whileInView={"show"}
          >
            <div className="flex relative items-center justify-center w-[300px]  h-[400px] overflow-hidden ">
              <Image
                fill
                quality={75}
                src={"/img/testimoni/1.png"}
                alt="photo1"
              />
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col items-start lg:flex-row-reverse gap-10 ">
          <motion.div
            variants={fadeIn("up", 0.2)} // Menambahkan argumen kedua untuk memperbaiki kesalahan
            initial={"hidden"}
            whileInView={"show"}
            className="flex flex-row-reverse items-center text-green-700 gap-5"
          >
            <BsTranslate size={50} />
            <span className="text-3xl font-semibold">
              {data("Layanan.InterpretasiPenerjemah.title")}
            </span>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)} // Menambahkan argumen kedua untuk memperbaiki kesalahan
            initial={"hidden"}
            whileInView={"show"}
          >
            <div className="flex relative items-center justify-center w-[300px] overflow-hidden h-[300px]  ">
              <Image
                fill
                quality={75}
                src={"/img/testimoni/2.png"}
                alt="photo1"
              />
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col items-start  lg:flex-row gap-10 w-full overflow-hidden ">
          <motion.div
            variants={fadeIn("up", 0.2)} // Menambahkan argumen kedua untuk memperbaiki kesalahan
            initial={"hidden"}
            whileInView={"show"}
            className="flex flex-row items-center text-green-700 gap-5"
          >
            <IoMdSchool size={50} />
            <span className="text-3xl font-semibold">
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
              <div className="flex relative items-center justify-center w-[300px] overflow-hidden h-[400px]  ">
                <Image
                  fill
                  quality={75}
                  src={"/img/testimoni/4.png"}
                  alt="photo1"
                />
              </div>
              <div className="flex relative items-center justify-center w-[300px] overflow-hidden h-[400px]  ">
                <Image
                  fill
                  quality={75}
                  src={"/img/testimoni/6.jpeg"}
                  alt="photo1"
                  className="object-cover"
                />
              </div>
              <div className="flex relative items-center justify-center w-[300px] overflow-hidden h-[400px]  ">
                <Image
                  fill
                  quality={75}
                  src={"/img/testimoni/3.png"}
                  alt="photo1"
                  className="object-cover"
                />
              </div>
            </Carousel>
          </motion.div>
        </div>
        <div className="flex flex-col items-start lg:flex-row-reverse gap-10 ">
          <motion.div
            variants={fadeIn("up", 0.2)} // Menambahkan argumen kedua untuk memperbaiki kesalahan
            initial={"hidden"}
            whileInView={"show"}
            className="flex flex-row-reverse items-center text-green-700 gap-5"
          >
            <GrUserWorker size={50} />
            <span className="text-3xl font-semibold">
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
              <div className="flex relative items-center justify-center w-[300px] overflow-hidden h-[400px]  ">
                <Image
                  fill
                  quality={75}
                  src={"/img/testimoni/5.jpeg"}
                  alt="photo1"
                />
              </div>
              <div className="flex relative items-center justify-center w-[300px] overflow-hidden h-[400px]  ">
                <Image
                  fill
                  quality={75}
                  src={"/img/testimoni/7.png"}
                  alt="photo1"
                  className="object-cover"
                />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
