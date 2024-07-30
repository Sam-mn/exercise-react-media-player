import React, { createContext, useContext, useState } from "react";
import { ISong } from "../interfaces";

type PlaySongContextType = {
  song: ISong | null;
  changeSong: (song: ISong) => void;
  changeDisplay: (show: boolean) => void;
  showSong: boolean;
};

type PlaySongContextProviderProps = {
  children: React.ReactNode;
};

const PlaySongContext = createContext({} as PlaySongContextType);

// eslint-disable-next-line react-refresh/only-export-components
export const usePlaySong = () => useContext(PlaySongContext);

export const PlaySongContextProvider = ({
  children,
}: PlaySongContextProviderProps) => {
  const [theSong, setChangeTheSong] = useState<ISong | null>(null);
  const [showSong, setShowSong] = useState(false);

  const changeSong = (song: ISong) => {
    setChangeTheSong(song);
  };

  const changeDisplay = (show: boolean) => {
    setShowSong(show);
  };

  return (
    <PlaySongContext.Provider
      value={{ song: theSong, changeSong, showSong, changeDisplay }}
    >
      {children}
    </PlaySongContext.Provider>
  );
};
