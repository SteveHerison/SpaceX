import Douglas from "../../assets/crew/image-douglas-hurley.png";
import DouglasWeb from "../../assets/crew/image-douglas-hurley.webp";
import Mark from "../../assets/crew/image-mark-shuttleworth.png";
import MarkWeb from "../../assets/crew/image-mark-shuttleworth.webp";
import Victor from "../../assets/crew/image-victor-glover.png";
import VictorWeb from "../../assets/crew/image-victor-glover.webp";
import Anousheh from "../../assets/crew/image-anousheh-ansari.png";
import AnoushehWeb from "../../assets/crew/image-anousheh-ansari.webp";

export interface Crew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export const Crews: Crew[] = [
  {
    name: "Douglas Hurley",
    images: {
      png: Douglas,
      webp: DouglasWeb,
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: Mark,
      webp: MarkWeb,
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: Victor,
      webp: VictorWeb,
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: Anousheh,
      webp: AnoushehWeb,
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];
