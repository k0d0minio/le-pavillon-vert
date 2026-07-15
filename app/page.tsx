import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Gallery } from "@/components/sections/gallery";
import { Events } from "@/components/sections/events";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
