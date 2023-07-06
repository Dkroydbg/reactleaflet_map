import React from "react";
import dynamic from "next/dynamic";
import DateRangeComp from "@/components/DateRangeComp";
import Header from "@/components/Header";
import '../app/globals.css'

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/Front"), {
    ssr: false
  }
  );

  return (
    <main>
      <div id="map">
        <Header />
        <MapWithNoSSR />
      </div>
    </main>
  );
}
