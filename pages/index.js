import React from "react";
import dynamic from "next/dynamic";
import DateRangeComp from "@/components/DateRangeComp";
import Header from "@/components/Header";
import '../app/globals.css'

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from '../service/reducers/rootReducer';
const store=createStore(rootReducer)


export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/Front"), {
    ssr: false
  }
  );

  return (
    <Provider store={store}>
    <main>
      <div id="map">
        <Header />
        <MapWithNoSSR />
      </div>
    </main>
    </Provider>
  );
}
