import Image from "next/image";
import { Card } from "../ui/card";
import { GrLicense } from "react-icons/gr";

type DataProps = {
  data: (key: string) => string;
};

export default function Profile({ data }: DataProps) {
  return (
    <div
      id="profile"
      className="flex p-5 md:p-16 flex-col md:flex-row my-6 bg-green-700 dark:bg-[#121212]  gap-10 items-center md:items-start justify-center w-full h-full"
    >
      <div className="flex  flex-col gap-4">
        <h1 className="text-4xl text-white md:text-3xl lg:text-4xl  w-full  font-semibold text-center md:text-start ">
          {data("Profile.title")}
        </h1>
        <div className="space-y-6">
          <p className=" max-w-3xl text-justify text-white">
            {data("Profile.description")}
          </p>
          <div className="flex  flex-col gap-2 w-full lg:max-w-sm ">
            <Card className="flex flex-col  p-4 dark:bg-black/70 ">
              <div className="flex items-center gap-4">
                <GrLicense size={35} className="text-amber-500" />
                <div className="flex flex-col">
                  <span className="font-semibold  text-amber-500">
                    {data("Profile.Licence.igm")}
                  </span>
                  <span>78376*************2326</span>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col  p-4 dark:bg-black/70 ">
              <div className="flex items-center gap-4">
                <GrLicense size={35} className="text-amber-500" />
                <div className="flex flex-col">
                  <span className="font-semibold text-amber-500">
                    {data("Profile.Licence.tsk")}
                  </span>
                  <span>78376*************2326</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="p-5 pt-16 scale-90 md:scale-100 ">
        <div className="relative w-[400px] h-[497px]  ">
          <div className="absolute font-bold text-sm gap-4 flex flex-col p-5 dark:bg-black/95  items-center shadow-md -top-16 -left-3 md:-left-10 rounded-2xl  z-20 w-max h-max bg-white">
            <Image
              width={46}
              height={46}
              alt="icons"
              src={"/icons/status-up.svg"}
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <span className="text-2xl">+80%</span>
              <span>Engagements</span>
            </div>
          </div>

          <div className="absolute font-bold text-xl gap-4 flex  justify-center p-5 dark:bg-black/95  items-center shadow-md bottom-5 -right-3 md:-right-10 rounded-2xl  z-20 w-max h-max bg-white">
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

          <div className="relative w-[400px] h-[497px]  rounded-b-full overflow-hidden">
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
