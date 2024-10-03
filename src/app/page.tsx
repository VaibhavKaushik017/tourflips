import AboutCards from "@/components/Home/AboutCards";
import Discover from "@/components/Home/Discover";
import Hero from "@/components/Home/Hero";
import ListenPodcast from "@/components/Home/ListenPodcast";

export default function Home() {
  return (
    <>
      <Hero />
      <Discover />
      <ListenPodcast />
      <AboutCards />
    </>
  );
}
