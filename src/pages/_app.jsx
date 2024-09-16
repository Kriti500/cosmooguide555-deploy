import "../globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Index from ".";

export default function App() {
  return (
   <>
      <Head>
        <link rel="shortcut icon" href="/DS.ico" />
        <title>COSMOOGUIDE</title>
      </Head>
      <div className="relative flex flex-col h-screen justify-between">
    
        <Navbar />
        <Index/>
        <Footer />
      </div>
   </>
  );
}