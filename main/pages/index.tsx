import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Header } from "@hagevvashi-info/components";
import { CommonMeta } from "../components/CommonMeta";

export default function Home() {
  return (
    <>
      <Head>
        <title>hagevvashi.info</title>
        <meta
          name="description"
          content="Welcome to hagevvashi's information."
        />
        <CommonMeta />
      </Head>
      <Header />
      <Box>home</Box>
    </>
  );
}
