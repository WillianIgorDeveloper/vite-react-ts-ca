import { Button } from "@/presentation/components/ui/button";
import { HomeProps } from "./types";
import { Link } from "react-router-dom";

export function HomeLayout({}: HomeProps) {
  return (
    <>
      <main>
        <section className="bg-hero-pattern bg-no-repeat bg-cover">
          <div className="container mx-auto text-center p-5 h-screen flex flex-col items-center justify-center gap-3 max-w-sm md:flex-row-reverse md:text-left md:max-w-none md:gap-5 md:h-[80vh] lg:gap-8 xl:gap-28 bg-gradient-to-t from-zinc-900 via-transparent to-transparent">
            <img src="/icon.svg" alt="icon" className="md:max-w-xs" />
            <div className="space-y-3 md:max-w-xs lg:max-w-md xl:max-w-lg">
              <h2 className="text-3xl p-1 font-black lg:text-4xl xl:text-5xl">
                A study project
              </h2>
              <p className="px-3 md:p-0">
                This project is a study project, it is not intended for
                commercial use.
              </p>
              <div className="space-x-3 pt-1">
                <Link to="/signin">
                  <Button>Get Started</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline">Create Account</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
