import MusicList from "./components/MusicList";
import Navbar from "./components/Navbar";
import Song from "./components/Song";

export function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="appDiv">
        <MusicList />
        <Song />
      </div>
    </div>
  );
}
