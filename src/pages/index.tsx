import Head from "next/head";
import Header from "../components/Header";
export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Nyoba belajar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
