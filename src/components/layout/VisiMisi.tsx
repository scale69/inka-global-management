import { FaBookReader } from "react-icons/fa";
import { Card } from "../ui/card";
import {
  TbHexagonNumber1,
  TbHexagonNumber2,
  TbHexagonNumber3,
  TbHexagonNumber4,
  TbHexagonNumber5,
  TbHexagonNumber6,
} from "react-icons/tb";
import { IoBookmarks } from "react-icons/io5";

type DataProps = {
  data: (key: string) => string;
};
export default function VisiMisi({ data }: DataProps) {
  return (
    <div
      id="visimisi"
      className="flex p-5 md:p-16 flex-col  gap-10 items-center  justify-center w-full h-full"
    >
      <h1 className="text-4xl md:text-3xl lg:text-4xl  w-full  font-semibold text-center  ">
        {data("VisiMisi.title")}
      </h1>
      <Card className="p-5 space-y-4 max-w-3xl">
        <div className="flex items-center gap-4">
          <FaBookReader size={40} className="text-green-700" />
          <h1 className="text-2xl text-green-700 font-bold">
            {data("VisiMisi.visi.title")}
          </h1>
        </div>
        <h2 className=" text-justify">{data("VisiMisi.visi.description")}</h2>
      </Card>
      <div className="relative flex flex-col gap-4 p-5 py-14 border-4 border-amber-400 rounded-2xl">
        <div className="absolute -top-5 bg-[#F1F4F5]  dark:bg-[#121212] px-4 flex items-center gap-4">
          <IoBookmarks size={40} className="text-green-700" />
          <h1 className="text-2xl text-green-700 font-bold">
            {data("VisiMisi.misi.title")}
          </h1>
        </div>
        <div className="flex flex-col ">
          <div className="flex gap-4 items-center text-justify max-w-3xl">
            <TbHexagonNumber1 className="text-[150px] md:text-[100px] text-amber-400" />
            <span>{data("VisiMisi.misi.1")}</span>
          </div>
          <div className="flex gap-4 items-center text-justify  max-w-3xl">
            <span>{data("VisiMisi.misi.2")}</span>
            <TbHexagonNumber2 className="text-[150px] md:text-[100px] text-amber-400" />
          </div>
          <div className="flex gap-4 items-center text-justify max-w-3xl">
            <TbHexagonNumber3 className="text-[150px] md:text-[100px] text-amber-400" />
            <span>{data("VisiMisi.misi.3")}</span>
          </div>
          <div className="flex gap-4 items-center text-justify max-w-3xl">
            <span>{data("VisiMisi.misi.4")}</span>
            <TbHexagonNumber4 className="text-[150px] md:text-[100px] text-amber-400" />
          </div>
          <div className="flex gap-4 items-center text-justify max-w-3xl">
            <TbHexagonNumber5 className="text-[150px] md:text-[100px] text-amber-400" />
            <span>{data("VisiMisi.misi.5")}</span>
          </div>
          <div className="flex gap-4 items-center text-justify max-w-3xl">
            <span>{data("VisiMisi.misi.6")}</span>
            <TbHexagonNumber6 className="text-[150px] md:text-[100px] text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
