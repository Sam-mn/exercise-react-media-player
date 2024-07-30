import { usePlaySong } from "../context/PlaySongContext";

const Navbar = () => {
  const { changeDisplay, showSong } = usePlaySong();
  return (
    <div className="navbar">
      {showSong && (
        <span
          className="material-symbols-outlined"
          onClick={() => changeDisplay(false)}
        >
          arrow_back
        </span>
      )}
      <p>Playlist - Moody</p>
      <span className="material-symbols-outlined">more_vert</span>
    </div>
  );
};

export default Navbar;
