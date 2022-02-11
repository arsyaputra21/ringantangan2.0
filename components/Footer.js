import Wave from "./Wave";
import { Instagram, Facebook } from "./SocialMediaIcons";
import { MailIcon } from "@heroicons/react/outline";

const Footer = () => {
  return (
    <>
      <Wave />

      <div className="bg-main space-y-4 p-5 sm:px-20 sm:py-10 text-white">
        <h2 className="font-concert-one text-3xl md:text-6xl">
          Jangan sampai ketinggalan!
        </h2>
        <p className="font-bold text-xl md:text-3xl">Ikuti sosial media kami</p>
        <div className="flex justify-center md:justify-start gap-2 md:gap-5 lg:gap-8">
          <Instagram customClass="cursor-pointer h-16 md:h-24 text-violet-400" />
          <Facebook customClass="cursor-pointer h-16 md:h-24" />
        </div>
        <p className="flex text-lg gap-1">
          <MailIcon className="h-6" />
          Ringantangan8@gmail.com
        </p>
      </div>
      <div className="bg-stone-700 flex items-center justify-center p-1">
        <p className="text-white text-sm sm:text-md ">
          &copy; Copyrights RinganTangan 2022
        </p>
      </div>
    </>
  );
};

export default Footer;
