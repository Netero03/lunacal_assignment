import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import TabButton from "./TabButton";

function ProfileWidget() {
  const tabs = ["About Me", "Experiences", "Recommended"];
  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <article className="mt-5 pr-5 p-1 text-xs lg:text-base text-neutral-400 max-md:mr-1 max-md:max-w-full ">
            Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
            <br />
            <br />
            I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a great time for me to catch up on some coffee and respond to any urgent emails. When I'm not working, you can find me coaching my daughters' soccer team or trying out new recipes in the kitchen. I'm a big fan of outdoor activities, especially hiking and camping. I'm excited to get to know you better and explore how Salesforce can help your business thrive!
          </article>
        );
      case 1:
        return (
          <article className="mt-5 pr-5 p-1 text-xs lg:text-base text-neutral-400 max-md:mr-1 max-md:max-w-full ">
            I have extensive experience in sales and customer relations, specializing in CRM solutions. Over the past 10 years, I've helped numerous clients streamline their operations and increase revenue.
          </article>
        );
      case 2:
        return (
          <article className="mt-5 pr-5 p-1 text-xs lg:text-base text-neutral-400 max-md:mr-1 max-md:max-w-full ">
            Based on your current needs, I recommend our Salesforce Premium Package, which offers advanced analytics and AI-driven insights to maximize your business potential.
          </article>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative h-[46%] flex md:gap-3 lg:gap-5 px-3.5 pt-4 pb-7 rounded-2xl bg-[#363C43] shadow-[6px_6px_4px_rgba(0,0,0,0.4)]">
      <div className="absolute -bottom-7 w-[95%] h-1 bg-gradient-to-b from-[#282828] to-[#363C43] bg-white/5 shadow-[0px_4px_4px_rgba(0,0,0,0.33)] backdrop-blur-[4.91866px] rounded-[2.45933px]"></div>
      <div className="flex flex-col self-start  md:min-w-5 lg:min-w-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d6e2a7bdd7cae2f6ee72c376a30e13a584b7613bee749d26c011f7d746bbf4e?placeholderIfAbsent=true&apiKey=fdc97f1298d9417ba73f632a312daddd"
          className="object-contain self-center w-6 aspect-square cursor-pointer"
          alt="Info"
        />
        <div className="grid grid-cols-2 gap-px items-start mt-[5vw] w-fit rounded-sm max-md:mt-10 cursor-pointer">
          {[...Array(6)].map((_, index) => (
            <div key={index} className={`flex rounded-sm bg-neutral-600 h-[9px] w-[9px]`} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full max-md:max-w-full pr-5">
        <nav className="relative flex flex-col justify-center px-1 py-1 w-[95%] text-base font-medium leading-none text-center text-gray-400 rounded-2xl bg-[#171717] max-md:max-w-full">
          <div className="relative flex gap-1 items-center justify-between max-md:max-w-full">
            <div
              className="absolute top-0 bottom-0 left-0 w-1/3 bg-[#28292F] rounded-xl transition-all duration-300"
              style={{
                transform: `translateX(${activeTab * 100}%)`,
              }}
            />
            {tabs.map((tab, index) => (
              <TabButton
                key={index}
                label={tab}
                isActive={index === activeTab}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
        </nav>
        <SimpleBar style={{ maxHeight: 150 }} autoHide={false} >
          <div className="transition-opacity duration-300 ">
            {renderTabContent()}
          </div>
        </SimpleBar>
      </div>
    </section>
  );
}

export default ProfileWidget;
