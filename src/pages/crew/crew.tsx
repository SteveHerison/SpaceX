import { useState } from "react";
import BackCrew from "../../assets/crew/background-crew-desktop.jpg";
import Layout from "../layout";
import { Crews, bio, role as CrewType } from "./dataCrew";

const Crew: React.FC = () => {
  const [selectedCrew, setSelectedCrew] = useState<CrewType>(Crews[0]);

  return (
    <Layout backgroundImage={BackCrew}>
      <section className="w-full h-full flex justify-center items-center py-12 px-40">
        <div className="w-full h-full flex flex-col">
          <h1 className="flex gap-2 text-2xl">
            <span className="opacity-30">02</span>MEET YOUR CREW
          </h1>
          <div className="w-full h-full flex justify-center items-center gap-8">
            <div className="w-1/2 h-full">
              <div className="h-full w-full flex flex-col justify-center gap-4">
                <p className="text-3xl">{selectedCrew.role}</p>
                <h2 className="text-5xl">{selectedCrew.name}</h2>
                <span className="text-lg">{selectedCrew.bio}</span>
              </div>
              <div>
                {Crews.map((crew, index) => (
                  <button
                    onClick={() => setSelectedCrew(crew)}
                    key={index}
                    className={` ${
                      selectedCrew.name == crew.name
                        ? "bg-white"
                        : "bg-opacity-25"
                    } bg-white h-3 w-3 rounded-full mx-3`}
                  ></button>
                ))}
              </div>
            </div>

            <div className="w-1/2 h-full flex justify-center items-center flex-col">
              <img
                src={selectedCrew.images.png}
                alt={selectedCrew.name}
                className="h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Crew;
