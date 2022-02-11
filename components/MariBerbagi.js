import { PhoneIcon, PhotographIcon } from "@heroicons/react/outline";

const MariBerbagi = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 md:grid md:grid-cols-3 md:grid-rows-2">
      <h2 className="md:place-self-center md:col-start-1 md:row-start-1 md:row-span-2 flex text-2xl text-right md:text-5xl lg:text-6xl font-ubuntu-custom font-bold text-yellow-300">
        Mari
        <br />
        Berbagi!
      </h2>
      <p className="md:col-start-2 md:col-span-2 md:row-start-1 text-justify text-lg sm:text-xl md:text-3xl">
        Sahabat Ringantangan dapat langsung menghubungi admin kami via Whatsapp
        atau via DM Instagram untuk info lebih lanjut!
      </p>
      <div className="md:col-start-2 md:col-span-2 md:row-start-2 md:gap-5 flex items-start gap-3">
        <a
          href=""
          role="button"
          className="p-2 border-2 border-green-400 hover:border-green-300 hover:text-green-300 rounded-md flex items-center font-ubuntu-custom text-green-400 text-xl md:text-3xl cursor-pointer hover:scale-105 transition ease-in-out duration-150 "
        >
          <PhoneIcon className="h-6" /> WhatsApp
        </a>
        <a
          href=""
          role="button"
          className="p-2 border-2 border-violet-400 hover:border-violet-300 hover:text-violet-300 rounded-md flex items-center font-ubuntu-custom text-violet-400 text-xl md:text-3xl cursor-pointer hover:scale-105 transition ease-in-out duration-150"
        >
          <PhotographIcon className="h-7" /> Instagram
        </a>
      </div>
    </div>
  );
};
export default MariBerbagi;
