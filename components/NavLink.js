import Link from "next/link";

const NavLink = ({ Icon, title, href }) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center active:text-indigo-700 group cursor-pointer text-violet-100 hover:text-white">
        <Icon className="h-6 md:h-8 group-hover:animate-bounce" />
        <p className="opacity-100 text-sm sm:text-xl transition duration-200 ease-in-out font-concert-one tracking-widest">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default NavLink;
