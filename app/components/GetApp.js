import Image from "next/image";

const GetApp = () => {
  return (
    <div className="getApp">
      <div className="cardPlate flex justify-between items-center px-3 py-5">
        <div className=" space-y-3">
          <h3 className="text-light">Download Our App</h3>
          <p className="text-light">The best travel in the world</p>
        </div>
        <div className="border-2 border-white flex rounded bg-primary items-center">
          <Image
            src="/assets/misc/play-store.svg"
            alt="Play-store"
            width={50}
            height={50}
          />
          <div className="mx-1">
            <p className="uppercase text-light text-base font-medium">
              get it it on
            </p>
            <p className="text-light">Google Play</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
