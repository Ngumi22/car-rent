import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="hero"
      className="md:flex text-black bg-white py-6 sm:block mx-auto md:px-8 px-2">
      <div className="flex-1 py-4">
        <div className="mt-4">
          <p className="text-6xl md:text-7xl">Drive Your</p>
          <div className="sm:flex gap-8 flex-wrap justify-start ">
            <p className="text-6xl md:text-7xl">Dream</p>
            <div className="md:grid flex py-4">
              <p className="md:text-2xl text-base md:px-2 pr-1">
                Unlock your Journey
              </p>
              <p className="md:text-2xl text-base md:px-2 hover:underline underline-offset-[8px]">
                With Our Rental Cars
              </p>
            </div>
          </div>
        </div>

        <p className="md:mt-8 mt-3 md:pr-20 text-base">
          Download Our App from Playstore or AppStore for Free and Enjoy
          exclusive
          <span className="text-orange-600 font-semibold text-md"> deals</span>.
        </p>

        <div className="flex justify-start my-8 md:my-10 gap-10">
          <Link href="/cars">
            <button className="flex gap-2 px-12 py-3 text-sm font-medium text-black bg-btn-color border border-black rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
              Find A Car <FaArrowRightLong className="m-auto" />
            </button>
          </Link>
          <Link href="/about">
            <button className="flex gap-2 px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
              Learn More
              <FaArrowRightLong className="m-auto" />
            </button>
          </Link>
        </div>
      </div>

      <div className="flex-1 min-h-full hidden md:block ">
        <img
          src="/ferr.jpg"
          className="min-h-full w-full object-cover overflow-hidden"
        />
      </div>
    </section>
  );
}
