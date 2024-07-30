import { ISong } from "../interfaces";
import { usePlaySong } from "../context/PlaySongContext";

const MusicListElement = ({
  id,
  image,
  subTitle,
  title,
  percentagePlayed,
  playedLength,
  songLength,
}: ISong) => {
  const { changeSong, changeDisplay } = usePlaySong();
  return (
    <section className="musicList">
      <div>
        <img src={image} alt="test" />
        <div className="textsDiv">
          <p className="title">{title}</p>
          <p className="subTitle">{subTitle}</p>
        </div>
        <div className="playArrow">
          <span
            className="material-symbols-outlined"
            onClick={() => {
              changeSong({
                id,
                image,
                subTitle,
                title,
                percentagePlayed,
                playedLength,
                songLength,
              });
              changeDisplay(true);
            }}
          >
            play_arrow
          </span>
        </div>
      </div>
    </section>
  );
};

export default MusicListElement;
