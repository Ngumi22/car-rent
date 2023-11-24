import { FaRegStar, FaRegUser } from "react-icons/fa6";
import { TbManualGearbox } from "react-icons/tb";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

export default function CarCard() {
  return (
    <div className="group relative rounded-md shadow-lg">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
        <img
          src="/570.jpg"
          alt="Benz"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="p-2">
        <h2 className="text-[20px] font-medium m-auto mb-2">Benz</h2>
        <div className="flex justify-start gap-2">
          <FaRegStar className="my-auto" />
          <p>Benz</p>
          <p>Reviews</p>
        </div>
        <div className="grid grid-cols-2 gap-4 place-content-around h-20">
          <div className="flex gap-2">
            <MdOutlineAirlineSeatReclineExtra className="my-auto" />
            <p>5 Seat</p>
          </div>
          <div className="flex gap-2">
            <TbManualGearbox className="my-auto" />
            <p>Auto</p>
          </div>
          <div className="flex gap-2">
            <PiSteeringWheelFill className="my-auto" />
            <p>Self Drive</p>
          </div>
          <div className="flex gap-2">
            <FaRegUser className="my-auto" />
            <p> Cars</p>
          </div>
        </div>
        <div className="flex justify-around mx-auto border-t-2 border-gray-500 py-4">
          <p>Price</p>
          <p className="font-bold">
            Ksh .00 / <span className="text-red-500">Day</span>
          </p>
        </div>

        <button className="w-full bg-blue-700 rounded-md py-2 text-white">
          Rent Now
        </button>
      </div>
    </div>
  );
}
