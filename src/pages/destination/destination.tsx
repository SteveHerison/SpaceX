import React, { useState } from "react";
import Layout from "../layout";
import BackDestination from "../../assets/destination/background-destination-desktop.jpg";
import {
  Destinations,
  Destination as DestinationType,
} from "./dataDestination";

const Destination: React.FC = () => {
  const [selectedDestination, setSelectedDestination] =
    useState<DestinationType>(Destinations[0]);

  return (
    <Layout backgroundImage={BackDestination}>
      <section className="w-full h-full flex items-center justify-center py-12 px-40 text-white">
        <div className="flex flex-col w-full h-full">
          <h1 className="text-3xl flex gap-3 barlow-condensed">
            <p>01</p> Escolha seu destino
          </h1>
          <div className="flex justify-center items-center w-full h-full gap-8">
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex items-center justify-center">
                <img
                  src={selectedDestination.images.png}
                  alt={selectedDestination.name}
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center h-full">
              <div className="h-full w-full flex flex-col justify-center items-start px-20 gap-10">
                <div className="flex justify-start items-start gap-8">
                  {Destinations.map((destination, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDestination(destination)}
                      className={`${
                        selectedDestination.name === destination.name
                          ? "border-b-2 pb-2"
                          : "pb-2 hover:border-b-2 border-zinc-600"
                      } font-barlow-condensed text-xl`}
                    >
                      {destination.name}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-8xl">{selectedDestination.name}</h2>
                  <p className="font-barlow text-lg text-justify leading-[180%]">
                    {selectedDestination.description}
                  </p>
                </div>
                <hr className="border w-full opacity-25" />
                <div className="flex justify-between w-full gap-6 font-barlow-condensed">
                  <div className="w-full text-start uppercase font-bellefair text-sm leading-normal">
                    <p className="font-barlow-condensed tracking-[2px]">
                      AVG. DISTANCE
                    </p>
                    <p className="text-2xl font-bellefair">
                      {selectedDestination.distance}
                    </p>
                  </div>
                  <div className="w-full text-start">
                    <p className="font-barlow-condensed tracking-[2px]">
                      Est. travel time
                    </p>
                    <p className="text-2xl font-bellefair">
                      {selectedDestination.travel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Destination;
