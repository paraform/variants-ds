import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "@/layouts";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-loContrast text-hiContrast">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </div>
  );
};

export default Home;
