import React from "react";
import { connect } from "react-redux";

const songDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song!</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Artist-Title {song.artist} - {song.title}
      </p>
      <p>Duration {song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(songDetail);
