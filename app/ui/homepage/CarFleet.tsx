import CarCard from "../CarCard";

export default function CarFleet() {
  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="py-4 text-3xl font-semibold underline underline-offset-8">
          OUR RENTAL FLEETS
        </h1>
        <h3 className="py-2 text-2xl">Our Luxury Rental Services</h3>
        <p className="md:w-3/4 md:flex hidden text-base pt-2 mx-auto">
          Amco laboris nisi ut aliquip xea comod consequt duis aute irure dolor
          reprehenderit voluptate velit cillum dolore fugiat lore ipsum dolor
          sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt
        </p>
      </div>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 container">
        <CarCard />
      </div>
    </section>
  );
}
