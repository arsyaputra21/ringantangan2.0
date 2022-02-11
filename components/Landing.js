import { Link as ScrollLink } from "react-scroll";

const Landing = () => {
  return (
    <div className="flex flex-col items-center space-y-1 sm:space-y-3 justify-center bg-[url('/images/ringantanganlanding.jpg')] bg-cover bg-center bg-no-repeat min-h-screen shadow-lg">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl text-white font-ubuntu-custom font-bold">
        Selamat Datang Sahabat Ringantangan!
      </h1>
      <p className="text-2xl font-ubuntu-custom sm:text-3xl md:text-4xl text-yellow-200">
        Mari berbagi kebahagiaan.
      </p>
      <ScrollLink smooth={true} duration={800} offset={-160} to="about">
        <div className="font-ubuntu-custom cursor-pointer bg-main rounded-md p-2 text-white text-md sm:text-lg md:text-2xl shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 text-bold">
          Lebih Lanjut
        </div>
      </ScrollLink>
    </div>
  );
};

export default Landing;
