import React from "react";
import { GalleryWidget, ProfileWidget } from "./components";

function App() {
  return (
    <div className="h-screen w-full pl-10 pr-14 py-20 shadow-2xl bg-gradient-to-b from-[#282C31] to-[#191B1F]">
      <div className=" flex gap-10 h-full w-full">
        <div className="px-8 pt-8 pb-2.5 h-full w-6/12 text-lg font-medium leading-8 text-white rounded-3xl border border-[#96BEE7] border-solid bg-zinc-600 bg-opacity-80 "></div>
        <div className="flex flex-col w-6/12 justify-between max-md:mt-10 max-md:max-w-full">
          <ProfileWidget />
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
}

export default App;