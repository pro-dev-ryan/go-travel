import Image from "next/image";

const SearchFlights = () => {
  return (
    <div className="mx-4">
      <div className="frame">
        <Image
          className="absolute right-0 top-1/3 mr-4"
          src="../../assets/misc/2way.svg"
          width={20}
          height={20}
          alt="icon"
        />
        <p className="abcenter">From-To</p>
        <select name="" id="">
          <option value="Lahore-Karachi">Lahore-Karachi</option>
          <option value="Chennai-Maldiv">Chennai-Maldiv</option>
          <option value="Delhi-Pataya">Delhi-Pataya</option>
        </select>
      </div>
      <div>
        <div></div>
        <div className="frame">
          <p className="abcenter">Depart-Return</p>
          <p>07 Nov 23 - a3 Nov 23</p>
        </div>
      </div>
    </div>
  );
};

export default SearchFlights;
