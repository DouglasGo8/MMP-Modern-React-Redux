import React from "react";
import "./App.css";

import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";


/**
 *
 * @returns
 */
const app = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="columns eight wide">
          <SongDetail/>
        </div>
      </div>
    </div>
  );
};

export default app;
