import Image from "next/image";
import mobile from "../../public/assets/misc/getApp.png";

const GetApp = () => {
  return (
    <div className="getApp spacing-sect">
      <div className="relative -mb-14 flex justify-between items-center p-4 md:p-5">
        <div className="">
          <div className="space-y-3 md:space-y-0">
            <h3 className="text-light">Download Our App</h3>
            <p className="text-light">The best travel in the world</p>
          </div>
          <div className="border-2 hidden md:mt-3 md:flex border-white rounded bg-primary items-center my-auto">
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
        <div className="border-2 md:hidden border-white flex rounded bg-primary items-center my-auto">
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
        <div className="hidden md:block absolute right-5 bottom-5">
          <Image src={mobile} alt={mobile} width={140} />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
