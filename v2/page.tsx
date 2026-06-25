import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Ventures } from "./components/Ventures";
import { Resume } from "./components/Resume";
import { Speaking } from "./components/Speaking";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Ventures />
      <Resume />
      <Speaking />
      <Contact />
    </>
  );
}
