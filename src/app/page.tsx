import Button from "@/components/button/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="h-[100vh] flex flex-row-reverse justify-center items-center gap-16">
      <div className="w-1/2">
        <h1 className="font-bold text-3xl drop-shadow-xl">
          The modern schedule builder for colleges and universities!
        </h1>
        <br />
        <p className="text-xl drop-shadow-xl">
          Say goodbye to outdated scheduling systems and make sure you get your
          courses on time. Developed with a fast and simple "drag and drop"
          interface in mind.
        </p>
        <br />

        <Link href={"/onboarding"}>
          <Button text="Get Started" />
        </Link>
      </div>
      <Image
        src="/vectors/students.svg"
        alt="University students studying"
        height={300}
        width={300}
      />
    </section>
  );
}
