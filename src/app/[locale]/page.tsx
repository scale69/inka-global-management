import Ask from "@/components/layout/About/Ask";
import Header from "@/components/layout/Header";
import Layanan from "@/components/layout/Layanan";
import Profile from "@/components/layout/Profile";
import Testimoni from "@/components/layout/Testimoni";
import VisiMisi from "@/components/layout/VisiMisi";
import { useTranslations } from "next-intl";

export default function Home() {
  const data = useTranslations("data");

  return (
    <main className=" flex flex-col justify-center items-center w-full min-h-screen py-24 lg:py-10">
      <Header data={data} />
      <Layanan />
      <Profile data={data} />
      <VisiMisi data={data} />
      <Testimoni />
      <Ask data={data} />
    </main>
  );
}
