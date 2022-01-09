import Head from "next/head";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import Footer from "../components/Footer";
import SectionThree from "../components/SectionThree";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start lg:items-center space-y-24 p-4">
      <Head>
        <title>Yashodhan</title>
        <link rel="shortcut icon" type="image/jpg" href="/logo.png"/>
      </Head>

      <SectionOne />
      <SectionTwo />
      <SectionThree />

      <Footer />

    </div>
  );
}
