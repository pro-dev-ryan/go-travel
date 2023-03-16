import Image from "next/image";

const GetApp = () => {
  return (
    <div className="getApp">
      <div className="cardPlate relative -mb-14 flex justify-between items-center py-4">
        <div className="space-y-3">
          <h3 className="text-light">Download Our App</h3>
          <p className="text-light">The best travel in the world</p>
        </div>
        <div className="border-2 border-white flex rounded bg-primary items-center my-auto">
          <div>
            <Image
              src="/assets/misc/play-store.svg"
              alt="Play-store"
              width={45}
              height={45}
            />
          </div>
          <div className="mr-2">
            <p className="uppercase text-light text-xs font-medium">
              get it it on
            </p>
            <p className="font-extralight text-light">Google Play</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
