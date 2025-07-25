import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-2 p-5">
      <Image src={logo} alt="The Pine haven" width={60} height={60} />
      <span>The Pine Haven</span>
    </Link>
  );
}
