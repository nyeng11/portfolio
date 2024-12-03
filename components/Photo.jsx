import Image from "next/image";

const Photo = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={"/nyeng.jpeg"}
        width={600}
        height={600}
        alt="Hero Picture"
        className="object-contain rounded-full w-64 sm:w-72 md:w-96 lg:w-[40rem]"
      />
    </div>
  );
};

export default Photo;
