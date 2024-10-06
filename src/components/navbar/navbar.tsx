import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-4 p-4 font-medium">
      <div className="flex justify-between items-center gap-4 w-full bg-black text-white p-6 shadow-lg">
        <div className="flex gap-4">
          <Link href={""}>Home</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </div>

        <div className="flex gap-4">
          <Link href={""}>Sign Up</Link>
          <Link href={""}>Login</Link>
        </div>
      </div>
    </nav>
  );
}
