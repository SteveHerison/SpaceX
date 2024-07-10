import { useState } from "react";
import TechnologyBackground from "../../assets/technology/background-technology-desktop.jpg";
import Layout from "../layout";
import { Technologys, description as TechnologyType } from "./dataTechnology";

const Technology: React.FC = () => {
  const [selectedTechnology, setSelectedTechnology] = useState<TechnologyType>(
    Technologys[0]
  );

  return (
    <Layout backgroundImage={TechnologyBackground}>
      <section className="w-full h-full flex justify-center items-center py-12 ps-40">
        <div className="h-full w-full flex flex-col gap-6">
          <h1 className="text-2xl">
            <span>03</span>SPACE LAUNCH 101
          </h1>
          <div className="h-full w-full flex gap-8">
            <div className="w-1/2 flex justify-center items-center gap-16">
              <div className="flex flex-col gap-8">
                {Technologys.map((technology, index) => (
                  <button
                    className={`h-20 w-20  border rounded-full text-3xl  ${
                      selectedTechnology.name === technology.name
                        ? "bg-white text-black"
                        : "bg-transparent"
                    }`}
                    key={index}
                    onClick={() => setSelectedTechnology(technology)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div>
                <p>THE TERMINOLOGY…</p>
                <h2 className="text-5xl">{selectedTechnology.name}</h2>
                <p>{selectedTechnology.description}</p>
              </div>
            </div>
            <div className="w-1/2 h-full flex justify-end items-center">
              <img
                src={selectedTechnology.images.portrait}
                alt={selectedTechnology.name}
                className=" h-full "
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
