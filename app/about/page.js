import Image from "next/image";

import image1 from "@/public/about-1.jpg";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid items-center grid-cols-5 text-lg gap-x-24 gap-y-32">
      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-accent-400">
          Welcome to The Pine Haven
        </h1>

        <div className="space-y-8">
          <p>
            Where forest serenity and cozy living come together in perfect
            harmony. Tucked deep within the greenery,{" "}
            <i>
              <strong>The Pine Haven</strong>
            </i>{" "}
            is your peaceful escape from the everyday. It&apos;s not just about
            our beautifully crafted cabins — it&apos;s about rediscovering
            life&apos;s simple pleasures, surrounded by nature and the people
            you love.
          </p>
          <p>
            Our 8 handcrafted cabins offer warmth and comfort, but the true
            magic lies just outside your door — in the whispering trees, crisp
            forest air, and starlit skies. Stroll through sun-dappled trails,
            share stories around the campfire, or unwind in your private hot tub
            beneath the canopy of pines.
          </p>
          <p>
            This is where memories are made — a place to slow down, reconnect,
            and embrace the beauty of being together in nature&apos;s embrace.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>

      <div className="relative col-span-2 aspect-square">
        <Image
          src="/about-2.jpg"
          className="object-cover"
          fill
          alt="Family that manages The Pine Haven"
        />
      </div>

      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-accent-400">
          Managed by our family since 1980
        </h1>

        <div className="space-y-8">
          <p>
            Since{" "}
            <i>
              <strong>1980</strong>
            </i>{" "}
            ,{" "}
            <i>
              <strong>The Pine Haven</strong>
            </i>{" "}
            has been a heartfelt family retreat born from a love of nature and
            simple living. What began as a dream by our parents has grown into a
            sanctuary lovingly cared for across generations, where every detail
            reflects our family&apos;s passion for hospitality and the forest we
            call home.
          </p>
          <p>
            Through the years, we&apos;ve preserved the natural charm of the
            woods while adding the comforts that make your stay unforgettable.
            At The Pine Haven, you&apos;re more than a guest — you&apos;re part
            of a story that spans decades. Come, be a part of our forest family,
            where every stay feels like a return to something real, peaceful,
            and lasting.
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block px-8 py-5 mt-4 text-lg font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
