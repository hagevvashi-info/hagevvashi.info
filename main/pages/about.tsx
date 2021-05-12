import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { CommonMeta } from "../components/CommonMeta";

export default function About() {
  return (
    <>
      <Head>
        <title>hagevvashi.info | about</title>
        <meta name="description" content="abount hagevvashi" />
        <CommonMeta />
      </Head>
      <Header />
      <Box>about</Box>
    </>
  );
}
