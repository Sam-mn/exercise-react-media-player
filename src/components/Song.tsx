import { usePlaySong } from "../context/PlaySongContext";
import ProgressBar from "@ramonak/react-progress-bar";

const Song = () => {
  const { song, showSong } = usePlaySong();
  const displayClasses = showSong ? "song" : "song hideMusic";

  return (
    <div className={displayClasses}>
      {song && (
        <>
          <img src={song?.image} alt="song image" />
          <div>
            <section className="textAndSymbol">
              <span className="material-symbols-outlined">add_circle</span>{" "}
              <div>
                <p className="title">{song?.title}</p>
                <p className="subTitle">{song?.subTitle}</p>
              </div>
              <span className="material-symbols-outlined">favorite</span>{" "}
            </section>
            <section className="ProgressBar">
              <p>{song.playedLength}</p>
              <ProgressBar
                completed={song.percentagePlayed}
                baseBgColor="#0e1829"
                bgColor="#c7c7c7"
                isLabelVisible={false}
                height="10px"
              />
              <p>{song.songLength}</p>
            </section>
            <section className="symbolsDiv">
              <span className="material-symbols-outlined">repeat</span>{" "}
              <span className="material-symbols-outlined">fast_rewind</span>{" "}
              <span className="material-symbols-outlined playArrowSpan">
                play_circle
              </span>{" "}
              <span className="material-symbols-outlined">fast_forward</span>{" "}
              <span className="material-symbols-outlined">shuffle</span>{" "}
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Song;
