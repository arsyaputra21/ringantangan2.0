import JourneyItem from "./JourneyItem";
import { MapIcon } from "@heroicons/react/outline";

const Journey = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3">
      <JourneyItem gridposition="row-start-1 col-start-1" />
      <JourneyItem gridposition="row-start-2 col-start-2" />
      <JourneyItem gridposition="row-start-3 col-start-1 md:col-start-3" />
      <h2
        id="journey"
        className="pl-3 md:pl-0 flex items-center gap-1 row-start-1 md:row-start-2 col-start-2 place-self-center md:col-start-3 font-ubuntu-custom text-2xl md:text-4xl lg:text-5xl font-bold text-blue-300"
      >
        <MapIcon className="h-12" />
        <span>
          Perjalanan
          <br />
          Kami
        </span>
      </h2>
    </div>
  );
};

export default Journey;
