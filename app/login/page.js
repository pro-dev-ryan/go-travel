import Image from "next/image";
import man from "/public/assets/Login/left-img.png";

export default function page() {
  return (
    <div className="spacing-sect space-y-20 booking max-h-screen mb-52">
      <h1 className="text-center pt-4">My Booking</h1>
      <div className="md:flex items-center justify-between gap-5">
        <div className="hidden md:block w-1/2">
          <Image src={man} alt="Man with Bag" className="w-80" />
        </div>
        <div className="cardPlate md:w-1/2 space-y-5">
          <form action="" method="get">
            <div className="">
              <label className="text-lg font-medium" htmlFor="email">
                Email
              </label>
              <div>
                <input className="box" type="email" name="" id="email" />
              </div>
            </div>
            <div>
              <label className="text-lg font-medium" htmlFor="id">
                Booking ID
              </label>
              <div>
                <input className="box" type="number" name="" id="id" />
              </div>
            </div>
            <div className="pt-10">
              <input
                type="submit"
                value="Find"
                className="w-full bg-primary hover:bg-accent  rounded py-2 px-4 text-2xl font-medium text-light"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
