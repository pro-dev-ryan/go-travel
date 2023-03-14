import Image from "next/image";

const SearchFlights = () => {
  return (
    <div className="mx-4 space-y-4 text-center font-headline text-secondary">
      <div className="frame text-medium text-center">
        <Image
          className="absolute right-0 top-1/3 mr-4"
          src="../../assets/misc/2way.svg"
          width={20}
          height={20}
          alt="icon"
        />
        <p className="abcenter -top-4 font-semibold">From - To</p>
        <select name="" id="">
          <option value="Lahore-Karachi">Lahore-Karachi</option>
          <option value="Chennai-Maldiv">Chennai-Maldiv</option>
          <option value="Delhi-Pataya">Delhi-Pataya</option>
        </select>
      </div>
      <div className="flex space-x-2 justify-between">
        <div className="frame px-2 w-[40%]">
          <p className="searchDes">Trip</p>
          <select name="" id="">
            <option value="">Return</option>
            <option value="">One-Way</option>
          </select>
        </div>
        <div className="frame p-1 w-[55%] text-center">
          <p className="searchDes left-1/3 -translate-x-1/4">Depart-Return</p>
          <input type="date" />
        </div>
      </div>
      <p className="text-base font-linkline font-medium">+ Add Promo Code</p>
      <div className="center">
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
    </div>
  );
};

export default SearchFlights;
