import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BsBuildingCheck } from "react-icons/bs";
import { RiTranslate } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { GrDocumentTime } from "react-icons/gr";

import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";

type DataProps = {
  data: (key: string) => string;
};

type LayananProps = {
  id: number;
  title: string;
  icon: React.ReactElement;
  description: string;
  selengkapnya?: boolean;
};
export default function Layanan({ data }: DataProps) {
  const dataLayanan = [
    {
      id: 1,
      icon: (
        <GrDocumentTime
          size={40}
          className="text-green-700 p-1 border-[3px] border-green-700 rounded-2xl"
        />
      ),
      title: data("Layanan.PengurusanVisa.title"),
      description: data("Layanan.PengurusanVisa.description"),
      selengkapnya: true,
    },
    {
      id: 2,
      icon: (
        <BsBuildingCheck
          size={40}
          className="text-green-700 p-1 border-[3px] border-green-700 rounded-2xl"
        />
      ),
      title: data("Layanan.Terhubung.title"),
      description: data("Layanan.Terhubung.description"),
    },
    {
      id: 3,
      icon: (
        <RiTranslate
          size={40}
          className="text-green-700 p-1 border-[3px] border-green-700 rounded-2xl"
        />
      ),
      title: data("Layanan.InterpretasiPenerjemah.title"),
      description: data("Layanan.InterpretasiPenerjemah.description"),
    },
    {
      id: 4,
      icon: (
        <MdTravelExplore
          size={40}
          className="text-green-700 p-1 border-[3px] border-green-700 rounded-2xl"
        />
      ),
      title: data("Layanan.StudiBunding.title"),
      description: data("Layanan.StudiBunding.description"),
    },
    {
      id: 5,
      icon: (
        <IoSchoolOutline
          size={40}
          className="text-green-700 p-1 border-[3px] border-green-700 rounded-2xl"
        />
      ),
      title: data("Layanan.SekolahBahasaJepang.title"),
      description: data("Layanan.SekolahBahasaJepang.description"),
    },
  ];

  return (
    <div className="flex p-5 flex-col  gap-10 items-center justify-center w-full h-full">
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-4 border-amber-400 rounded-3xl p-5 py-12 md:py-14 md:p-10 justify-center items-center   max-w-5xl">
        <h1 className="absolute -top-5 left-5 px-5 text-green-700 text-4xl font-semibold bg-[#F1F4F5] dark:bg-[#121212]">
          {data("Layanan.title")}
        </h1>
        {dataLayanan.map((item: LayananProps) => (
          <Card key={item.id} className="h-[450px] dark:bg-black/35">
            <CardHeader>
              <div className="my-2">{item.icon}</div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-justify">
              {item.description}
            </CardContent>
            <CardFooter>
              {item.selengkapnya && (
                <Button asChild>
                  <Link href={"/visa"}>Selengkapnya</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
