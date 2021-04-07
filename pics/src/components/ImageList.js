import React from "react";
import "./ImageList.css";

import ImageCard from "./ImageCard";


/**
 * @author dbatista
 * @param {*} props 
 * @returns 
 */
const imageList = (props) => {
  const images = props.memes.map((meme) => {
    return <ImageCard key={meme.id} meme={meme} />;
  });

  return <div className="image-list">{images}</div>;
};

export default imageList;
