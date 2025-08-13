"use client";

import { useTranslations } from "next-intl";
import StudyTour from "@/components/layout/Testimoni/StudyTour";
import InterpretationTranslation from "@/components/layout/Testimoni/InterpretationTranslation";
import JapanaeseLanguageShool from "@/components/layout/Testimoni/JapanaeseLanguageShool";
import ConnactCompany from "@/components/layout/Testimoni/ConnactCompany";

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
        <StudyTour data={data} />
        <InterpretationTranslation data={data} />
        <JapanaeseLanguageShool data={data} />
        <ConnactCompany data={data} />
      </div>
    </div>
  );
}
