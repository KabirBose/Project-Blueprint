import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-blue-600 text-white h-[100vh] flex flex-row-reverse justify-center items-center">
      <div>
        <h1 className="font-bold text-4xl drop-shadow-xl">Project Blueprint</h1>
        <p className="text-xl drop-shadow-xl">
          The modern schedule builder for colleges and universities.
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
