import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const MarketingPage = () => {
  return (
    <section className="px-32 md:px-44 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between mt-20">
        <div className="lg:w-1/2">
          <div>
            <Image alt="Log" width={120} height={120} src="/logo.png" />
          </div>
          <h1 className={cn("text-5xl font-bold leading-tight text-[#1e293b] mb-6", headingFont.className)}>TeamSync helps people collaborate</h1>
          <h3 className={cn("text-3xl italic bg-gradient-to-r from-amber-700 via-blue-900 to-indigo-400 inline-block text-transparent bg-clip-text mb-8", headingFont.className)}>SuperCharging Productivity </h3>
          <p className="text-base font-light  text-[#64748b] mb-8">
            Bring all your tasks, teammates, and tools together. Keep everything in the same place—even if your team
            isn{`'`}t.
          </p>
          <Button size="lg" variant="green" >
            <Link href="/sign-up">
              Get Started!
            </Link>
          </Button>

        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            alt="Team collaboration illustration"
            className="mx-auto"
            height="300"
            src="/Kanban.jpg"
            width="500"
          />
        </div>
      </div>
    </section>





  );
};

export default MarketingPage;





