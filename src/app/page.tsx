
import {Hero} from "@/sections/Hero";
import { Header } from "@/sections/Header"
import {CallAction} from "@/sections/CallAction";
import Starcard from "@/sections/Starcard";
import Features from "@/sections/Featuress";
import Catagory from "@/sections/Catgaory";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
  
      <Header/>
      <Hero/>
      <CallAction/>
      <Starcard/>
      <Features/>
      <Catagory/>
      <Footer/>
    </>
  );
}
