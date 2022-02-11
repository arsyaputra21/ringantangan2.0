import Image from "next/image";
import { LocationMarkerIcon } from "@heroicons/react/outline";

const JourneyItem = ({ gridposition }) => {
  return (
    <div
      className={`relative group h-auto shadow-lg square cursor-pointer ${gridposition}`}
    >
      <Image
        src="/images/ringantanganlanding.jpg"
        className="blur-sm md:blur-none group-hover:blur-sm transition ease-in-out duration-200"
        layout="fill"
      />
      <div className="h-full flex flex-col justify-center items-center  w-full z-10 absolute group-hover:opacity-100 md:opacity-0 opacity-100 transition ease-in-out duration-200">
        <p className="font-ubuntu-custom font-bold text-4xl text-orange-200">
          #Volume1
        </p>
        <p className="flex gap-1 font-prompt-custom text-white">
          <LocationMarkerIcon className="h-5" /> Desa Roso Mulyo
        </p>
      </div>
    </div>
  );
};

export default JourneyItem;
