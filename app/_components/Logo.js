import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href={"/"} className="z-10 flex items-center gap-4">
      <Image src={logo} alt="The Pine haven" width={60} height={60} />
      <span className="text-xl font-semibold [word-spacing:-4px] text-primary-100">
        The Pine Haven
      </span>
    </Link>
  );
}
