import Link from "next/link";

function NavBar({ color }) {
  return (
    <nav
      className="absolute top-[2rem] left-1/2 transform -translate-x-1/2 w-[80%] flex justify-between items-center p-4 bg-transparent z-100"
      style={{ color: color }}
    >
      <div className="text-xl font-bold">Charterag</div>
      <div className="flex items-center flex-grow">
        <div className=" flex justify-center flex-grow">
          <Link href="/destination" className=" mx-4 body1 regular">
            Destinations
          </Link>
          <a href="#how-it-works" className=" mx-4 body1 regular">
            How it works
          </a>
          <a href="#about" className="mx-4 body1 regular">
            About
          </a>
          <a href="#blog" className="mx-4 body1 regular">
            Blog
          </a>
          <a href="#faq" className="mx-4 body1 regular">
            FAQ
          </a>
        </div>
        <button className="bg-yellow-400 font-bold text-black px-4 py-2 rounded-lg ">
          BOOK NOW
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
