import { useState } from "react";
import { CursorClickIcon } from "@heroicons/react/outline";

const About = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="grid md:grid-cols-3 gap-2 md:gap-0" id="about">
      <h2
        onClick={() => setVisible(!visible)}
        className={`${
          visible || "md:col-start-2"
        } cursor-pointer grid grid-cols-2 gap-3 justify-center items-center text-right font-ubuntu-custom text-2xl md:text-4xl lg:text-5xl font-bold text-violet-500`}
      >
        <span className="">
          Tentang
          <br />
          Kami
        </span>
        <CursorClickIcon
          className={`${
            visible ? "text-violet-400" : "text-violet-600"
          } h-16 animate-pulse`}
        />
      </h2>
      <p
        className={`${
          visible ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        } transition-opacity ease-in-out duration-1000 text-justify text-lg sm:text-xl md:text-3xl md:grow leading-normal md:col-span-2`}
      >
        <span className="font-ubuntu-custom text-violet-500 font-semibold tracking-wider">
          Ringantangan
        </span>{" "}
        adalah komunitas sosial yang bergerak dalam bidang penyaluran bantuan
        sosial. Kami menampung dan mewadahi segala sesuatu hal yang bersangkutan
        dengan bantuan pangan, pakan, dan papan. Kami bertujuan untuk bisa
        mempermudah dan dipercayai oleh sahabat ringantangan dalam berbagi
        kebaikan antar sesama.
      </p>
    </div>
  );
};

export default About;
