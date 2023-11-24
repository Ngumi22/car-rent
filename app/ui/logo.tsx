import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <Image
        className="w-auto"
        src="/logo.png"
        alt="Your Company"
        height={100}
        width={100}
      />
    </div>
  );
}
