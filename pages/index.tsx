import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { NextPage } from "next";

const Preview = dynamic(() => import("../components/Preview"), { ssr: false });

const Home: NextPage = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <Preview />
    </Suspense>
  );
};

export default Home;
