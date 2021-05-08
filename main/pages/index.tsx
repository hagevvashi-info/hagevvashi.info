import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>hagevvashi.info</title>
        <meta
          name="description"
          content="Welcome to hagevvashi's information."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box>home</Box>
    </>
  );
}
