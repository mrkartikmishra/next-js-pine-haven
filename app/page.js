import Image from "next/image";
import Link from "next/link";
import backgroundImage from "@/public/background-image.png";

export default function Home() {
  return (
    <main className="mt-24">
      <Image
        src={backgroundImage}
        fill
        placeholder="blur"
        quality={80}
        alt="The Pine Haven resort background image"
        className="object-cover object-top"
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 font-normal tracking-tight text-8xl text-primary-50">
          Welcome to the Haven
        </h1>
        <Link
          href={"/cabins"}
          className="px-8 py-6 text-lg font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
