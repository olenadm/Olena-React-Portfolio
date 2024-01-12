import Head from "next/head";
import Container from "react-bootstrap/Container";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Olena Dmytrenko. Experienced Front-End Developer</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      

      <Container as="main" className="py-4">
        <Intro />

        <Experience />

        <Projects />

        <Contact />

        <Socials/>

        <Footer />
        <div className="slider-thumb"></div>
        <div className="slider-thumb-2"></div>
        <div className="slider-thumb-3"></div>
      </Container>
    </>
  );
}
