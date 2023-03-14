import Image from "next/image";

const Card = () => {
  return (
    <div>
      <Image
        src="/assets/packages/p4.jpg"
        alt="package"
        width={425}
        height={350}
      />
    </div>
  );
};

export default Card;
