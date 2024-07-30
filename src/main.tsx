import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import "./index.css";
import { PlaySongContextProvider } from "./context/PlaySongContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PlaySongContextProvider>
      <App />
    </PlaySongContextProvider>
  </React.StrictMode>
);
