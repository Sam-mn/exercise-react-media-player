import { ISong } from "../interfaces";
import { songs } from "../data";
import MusicListElement from "./MusicListElement";
import { usePlaySong } from "../context/PlaySongContext";

const MusicList = () => {
  const { showSong } = usePlaySong();

  const displayClasses = showSong ? "MusicListDiv hideMusic" : "MusicListDiv";

  return (
    <div className={displayClasses}>
      {songs.map((song: ISong) => {
        return (
          <MusicListElement
            key={song.id}
            id={song.id}
            image={song.image}
            title={song.title}
            subTitle={song.subTitle}
            percentagePlayed={song.percentagePlayed}
            playedLength={song.playedLength}
            songLength={song.songLength}
          />
        );
      })}
    </div>
  );
};

export default MusicList;
