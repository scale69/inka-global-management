import Image from "next/image";
import { TbWorld } from "react-icons/tb";
type DataProps = {
  data: (key: string) => string;
};
export default function Header({ data }: DataProps) {
  return (
    <div className="flex flex-col justify-between items-center  lg:flex-row gap-10 p-5 md:px-24   w-full h-screen">
      <div className="flex flex-col gap-5 md:max-w-xl lg:max-w-2xl">
        <div className="flex items-center gap-1 bg-white dark:border shadow-md rounded-full px-4 py-2">
          <TbWorld size={24} className="dark:text-black" />
          <span className="text-xs dark:text-black">
            {data("Header.subTitle")}
          </span>
        </div>
        <h1 className="text-2xl font-bold">{data("Header.title")}</h1>
        <h2 className="text-sm text-justify dark:text-white text-slate-900">
          {data("Header.description")}
        </h2>
      </div>
      <div className="p-5 pt-16 scale-90 md:scale-100">
        <div className="relative w-[400px] h-[497px]">
          <div className="absolute font-bold text-xl gap-4 flex p-5 dark:bg-black/95  items-center shadow-md -top-16 -left-3 md:-left-10 rounded-2xl  z-20 w-max h-[126px] bg-white">
            <Image
              width={46}
              height={46}
              alt="icons"
              src={"/icons/cloud-add.svg"}
            />
            <div className="flex flex-col gap-1">
              <span>99,9%</span>
              <span>Departure</span>
            </div>
          </div>
          <div className="absolute font-bold text-xl gap-4 flex flex-col justify-center p-5 dark:bg-black/95  items-center shadow-md bottom-5 -right-3 md:-right-10 rounded-2xl  z-20 w-max h-max bg-white">
            <Image
              width={46}
              height={46}
              alt="icons"
              src={"/icons/status-up.svg"}
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <span className="text-3xl">+80%</span>
              <span>Engagements</span>
            </div>
          </div>
          <div className="relative w-[400px] h-[497px]  rounded-3xl overflow-hidden">
            <Image
              src={"/img/header.png"}
              alt="header-image"
              fill
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
