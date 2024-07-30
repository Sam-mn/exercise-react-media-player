import { ISong } from "./interfaces";
import LikeWeUsedTo from "./assets/Likeweusedto.jpeg";
import SaveTheRoom from "./assets/savetheroom.jpg";
import weJustDontCare from "./assets/Wejustdontcare.jpg";
import dakota from "./assets/Dakota .jpeg";
import Candyman from "./assets/Candyman.webp";
import human from "./assets/RegnBone.jpg";
import shots from "./assets/Imagine.jpg";
import allOfMe from "./assets/Allofme.jpg";

export const songs: ISong[] = [
  {
    id: 1,
    image: LikeWeUsedTo,
    title: "A Rocket to the moon",
    subTitle: "Like we used to",
    songLength: "05:20",
    percentagePlayed: 50,
    playedLength: "02:70",
  },
  {
    id: 2,
    image: SaveTheRoom,
    title: "Johan Legend",
    subTitle: "Save the room",
    songLength: "04:20",
    percentagePlayed: 60,
    playedLength: "02:00",
  },
  {
    id: 3,
    image: weJustDontCare,
    title: "Johan Legend",
    subTitle: "We just don't care",
    songLength: "03:20",
    percentagePlayed: 70,
    playedLength: "02:00",
  },
  {
    id: 4,
    image: dakota,
    title: "A Rocket to the moon",
    subTitle: "Dakota",
    songLength: "06:00",
    percentagePlayed: 50,
    playedLength: "03:00",
  },
  {
    id: 5,
    image: Candyman,
    title: "Zedd & Aloe Blacc",
    subTitle: "Candyman",
    songLength: "04:60",
    percentagePlayed: 50,
    playedLength: "02:30",
  },
  {
    id: 6,
    image: human,
    title: "Reg'nBone Man",
    subTitle: "Human",
    songLength: "05:10",
    percentagePlayed: 70,
    playedLength: "02:35",
  },
  {
    id: 7,
    image: shots,
    title: "Imagine Dragons",
    subTitle: "Shots (Boller Remix)",
    songLength: "07:20",
    percentagePlayed: 60,
    playedLength: "04:00",
  },
  {
    id: 8,
    image: allOfMe,
    title: "Johan Legend",
    subTitle: "All of me",
    songLength: "04:40",
    percentagePlayed: 10,
    playedLength: "00:55",
  },
];
