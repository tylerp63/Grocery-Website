import Image from "next/image";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Images from "./components/Images";

export default function Home() {
  return (
    <main>
      <Banner />
      <Nav />
      <Images />
    </main>
  );
}
