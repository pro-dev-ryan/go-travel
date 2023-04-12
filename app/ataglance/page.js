import Image from "next/image";
import left from "../../public/assets/ataglance/images/left.png";
import right from "../../public/assets/ataglance/images/right.png";
import center from "../../public/assets/ataglance/images/Rectangle 422.png";
import map from "../../public/assets/ataglance/svg/Vector.svg";
export default function page() {
  return (
    <div className="spacing-sect">
      <div className="w-full center h-48 commonMap">
        <h1>At A Glance</h1>
      </div>
      <div className="space-y-5 text-center">
        <h3>About Lakshadweep</h3>
        <p className="text-left">
          Lakshadweep Islands commonly known as coral paradise of India, a group
          of islands which is scattered in the Arabian Sea. This is one of the
          worlds most spectacular tropical island systems, Lakshadweep is tucked
          away at 220-440Kms off cost of Kerala State of the Indian Peninsula.
          This archipelago consists of 36 sun-kissed islands comprises of 12
          atolls, three reefs, five submerged banks and ten inhabited islands
          fringed by beautiful coral reefs and exotic marine life. The islands
          offer a precious heritage of ecology and culture. The unique feature
          of the Islands is its coral reef, making it a pristine leisure spot to
          come back. 4200 sq. kms of lagoon, rich in marine wealth, is spread
          over 36 islands in an area of 32 sq. kms.
        </p>
      </div>
      &nbsp;
      <div className="relative mx-4 h-[300px] w-[342px]">
        <div className="absolute border-4 w-[80%] h-[70%] border-secondary -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded"></div>
        <Image
          className="absolute top-0 -left-5 -z-30"
          src={right}
          alt=""
          width={180}
        />
        <Image
          className="absolute top-0 right-3 z-20"
          src={left}
          alt=""
          width={99}
        />
        <Image
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10"
          src={center}
          alt=""
          width={180}
        />
      </div>
      &nbsp;
      <div className="space-y-2 text-left mt-5">
        <p>
          The pristine beauty, white sandy beaches, crystal clear water, shallow
          lagoon, rich marine wealth, pollution free environment, variety of
          coral eco system, flora & fauna and water sports activities like,
          scuba diving, snorkeling, wind surfing, water skiing, para sailing,
          sailing boats, speed boats makes Lakshadweep as one of the most
          popular holiday destination for tourists both domestic as well as
          foreign.
        </p>
        <p>
          Lakshadweep is the tiniest Union Territory of India and is its only
          coral island chain. The islands have a total area of 32 sq.kms and the
          lagoons enclosed by the atolls cover an area of 4200 sq.kms. Its
          territorial waters extend to 20,000 sq.kms and Exclusive Economic Zone
          (EEZ) to 4,00,000 sq.kms. Only 10 of these islands namely, Agatti,
          Amini, Andrott, Bitra, Chetlat, Kadmat, Kalpeni, Kavaratti, Kiltan and
          Minicoy are inhabited. Kavaratti is the Administrative Headquarters of
          the Union Territory. It is culturally very close to the nearest
          mainland Indian state of Kerala and Malayalam is a widely spoken
          language apart from local dialects. Minocy Island has a different
          language by the name Mahl.
        </p>
        <p>
          Early history of Lakshadweep is unwritten. Local traditions attribute
          the first settlement on these islands to the period of Cheraman
          Perumal, the legendary king of Kerala. Though it is commonly believed
          that the first settlers in these islands were the ship-wrecked sailor
          who had set out to Mecca in search of Cheraman Perumal, the legendary
          king of Kerala, studies are being continued about the settlement.
        </p>
        <p>
          Earlier, life in these Islands was hard and challenging. Foreign
          traders and travellers held sway in these islands to explore it’s
          natural beauty. Quite often the islanders were subject to their savage
          cruelties. The events in these geographically isolated islands were
          never known to the outside world.
        </p>
      </div>
    </div>
  );
}