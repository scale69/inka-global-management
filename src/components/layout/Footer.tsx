import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailRead, MdOutlinePhoneEnabled } from "react-icons/md";

export default function Footer() {
  const data = useTranslations("data");

  return (
    <footer className="flex flex-col items-center justify-center h-max  bg-slate-50 w-full">
      <div className="flex flex-col md:flex-row gap-10 md:w-[800px] py-10 px-5 md:px-10 lg:px-20 lg:w-[1200px] justify-between">
        <div className="w-max flex flex-col gap-5">
          <h1 className="text-2xl font-bold">Inka Global Management</h1>
          <a
            href="https://maps.app.goo.gl/AUYSpJPhkdYoL19AA"
            target="_blank"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <IoLocationSharp size={25} />
            <span className="text-sm lg:text-base max-w-xs ">
              〒 533-0023 大阪府大阪市東淀川区東淡路4丁目17-15
              岩瀬スペース213号室
            </span>
          </a>
          <a
            href="tel:+818047655449"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <MdOutlinePhoneEnabled size={25} />
            <span className="text-sm lg:text-base max-w-xs ">
              +81 80-4765-5449
            </span>
          </a>
          <a
            href="mailto:andikapramana1988@gmail.com"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <MdMarkEmailRead size={25} />
            <span className="text-sm lg:text-base max-w-xs ">
              andikapramana1988@gmail.com
            </span>
          </a>
        </div>
        <div className="w-max ">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/#layanan"
          >
            {data("Link.Layanan")}
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#profile"
          >
            {data("Link.Profile")}
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
          >
            {data("Link.Testimoni")}
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/#visimisi"
          >
            {data("Link.VisiMisi")}
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/about"
          >
            {data("Link.About")}
          </Link>
        </div>
      </div>
      <div className="bg-black/90 py-2 flex justify-center items-center text-white text-xs w-full">
        scale
      </div>
    </footer>
  );
}
