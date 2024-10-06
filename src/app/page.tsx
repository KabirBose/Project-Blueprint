import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-blue-600 text-white h-[100vh] flex flex-row-reverse justify-center items-center">
      <div className="w-1/2">
        <h1 className="font-bold text-3xl drop-shadow-xl">
          The modern schedule builder for colleges and universities.
        </h1>
        <p className="text-xl drop-shadow-xl">
          Say goodbye to outdated scheduling systems and make sure you get your
          courses on time. Developed with a fast and simple drag and drop
          interface in mind.
        </p>
      </div>
      <Image
        className="drop-shadow-xl"
        src="/vectors/schedule.svg"
        alt="University schedule"
        height={300}
        width={300}
      />
    </section>
  );
}
