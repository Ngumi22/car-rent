export default function SearchInput() {
  return (
    <div className="bg-hero-pattern bg-cover bg-scroll bg-opacity-75 bg-center h-auto my-5 p-10">
      <div className="grid place-content-center px-32">
        <div className="pb-5">
          <h1 className="font-semibold text-white text-[40px]">
            Book & Rent a Car
          </h1>
          <p className="text-white text-sm font-semibold md:w-1/2 sm:w-full">
            Fermentum luctus convallis non lectus. Aliquam at ut viverra non
            arcu massa laoreet commodo ac. Ut dui vel eu lacus. Turpis lectus
            leo sed mi. Morbi consequat urna morbi viverra magna.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 place-items-stretch sm:w-full py-10 px-16 bg-inherit border border-white">
          <div className="">
            <p className="text-white font-semibold">
              Your Name <span className="text-orange-700">*</span>
            </p>
            <input
              type="text"
              placeholder="Enter your name"
              className="outline-none w-full py-1 px-10 bg-transparent bg-white text-gray-400"
            />
          </div>

          <div className="">
            <p className="text-white font-semibold">
              Your Email <span className="text-orange-700">*</span>
            </p>
            <input
              type="text"
              placeholder="Enter your email"
              className="outline-none w-full py-1 px-10 bg-transparent bg-white text-gray-400"
            />
          </div>

          <div className="">
            <p className="text-white font-semibold">
              Phone Number <span className="text-orange-700">*</span>
            </p>
            <input
              type="tel"
              placeholder="Phone Number"
              className="outline-none w-full py-1 px-10 bg-transparent bg-white text-gray-400"
            />
          </div>

          <label className="block">
            <p className="text-white font-semibold">
              Car Brand <span className="text-orange-700">*</span>
            </p>
            <select className="block w-full py-2 px-10">
              <option>Car Type</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </label>

          <div className="">
            <p className="text-white font-semibold">
              Pick Up Date <span className="text-orange-700">*</span>
            </p>
            <input
              type="date"
              placeholder="Pick Up Date"
              className="outline-none w-full py-1 px-10 bg-transparent bg-white text-gray-400"
            />
          </div>
          <div className="">
            <p className="text-white font-semibold">
              Drop Off Date <span className="text-orange-700">*</span>
            </p>
            <input
              type="date"
              placeholder="Pick Up Date"
              className="outline-none w-full py-1 px-10 bg-transparent bg-white text-gray-400"
            />
          </div>

          <div className="">
            <button className="border-[1px] px-6 py-2 w-full place-self-center bg-blue-700">
              Rent A Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
