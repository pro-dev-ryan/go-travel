import Image from "next/image";

const SearchFlights = () => {
  return (
    <div className="mx-4 md:mx-16 font-textline text-secondary">
      <form action="" className="space-y-4">
        <div className="flex flex-col gap-5 md:gap-2 md:flex-row ">
          {/* left-side */}
          <div className="flex md:gap-2 md:w-[46%]">
            <div className="frame w-full md:w-2/3 text-center">
              <Image
                className="absolute right-0 top-1/3 mr-4"
                src="../../assets/misc/2way.svg"
                width={20}
                height={20}
                alt="icon"
              />
              <p className="searchDes left-1/2 md:left-0 -translate-x-1/2 md:translate-x-2 -top-4">
                From - To
              </p>
              <p className="searchProp">
                <span>Chennai</span> - <span>Thailand</span>
              </p>
            </div>
            <div className="hidden md:inline-block frame px-2">
              <p className="searchDes">Trip</p>
              <select name="" id="" className="searchProp">
                <option value="">Return</option>
                <option value="">One-Way</option>
              </select>
            </div>
          </div>
          {/* right-side/ down-side */}
          <div className="flex flex-1 md:w-1/2 space-x-5 md:space-x-0 justify-between md:justify-evenly">
            <div className="md:hidden frame px-2">
              <p className="searchDes">Trip</p>
              <select name="" id="" className="searchProp">
                <option value="">Return</option>
                <option value="">One-Way</option>
              </select>
            </div>
            <div className="frame p-1 md:px-[2%] flex-grow  text-center">
              <p className="searchDes left-1/3 md:left-0  -translate-x-1/4 md:translate-x-2">
                Depart-Return
              </p>
              <p className="searchProp">
                <span>13 Jan 23</span> - <span>16 Jan 23</span>
              </p>
            </div>
          </div>
          {/* last field tab */}
          <div className="frame p-1 md:px-[2%] flex-1 hidden md:block">
            <p className="searchDes px-[1%]">Passengers-Class</p>
            <p className="searchProp">
              {" "}
              <span>2 passenger </span>,<span>business</span>{" "}
            </p>
          </div>
        </div>
        {/* Action  */}
        <div className="center flex-col md:flex-row md:justify-end gap-5">
          <button className="text-base font-linkline font-medium">
            + Add Promo Code
          </button>
          <button className="primaryButton px-4">
            <span>
              <Image
                src="../../assets/misc/paper-plane.svg"
                alt="plane"
                width={18}
                height={18}
              />
            </span>
            Show Flights
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFlights;
