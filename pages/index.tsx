import Head from "next/head";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import Footer from "../components/Footer";
import SectionThree from "../components/SectionThree";

export default function Home() {
  return (
    <div className="flex flex-col justify-around items-center space-y-36 p-4">
      <Head>
        <title>Yashodhan</title>
      </Head>

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}
