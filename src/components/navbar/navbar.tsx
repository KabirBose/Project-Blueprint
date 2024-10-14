import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-4 p-4 font-medium">
      <div className="flex justify-between items-center gap-4 w-full bg-black text-white p-6 shadow-lg rounded-md">
        <div className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>

        <div className="flex gap-4">
          <Link href={"/onboarding"}>Get Started</Link>
        </div>
      </div>
    </nav>
  );
}
