import React from "react";
import ReactPlayer from "react-player";

const VideoPage = () => {
  const url = ["https://youtu.be/wg8kEpeu36w"];
  return (
    <div className="mt-56 grid grid-cols-2 justify-center items-center gap-x-10 gap-y-6 xl:max-w-6xl mx-auto max-xl:grid-cols-1 px-4 ">
        <div className="flex">
        <ReactPlayer url={url} className="video" controls />
        </div>
        <div className="flex">
        <ReactPlayer url={url} className="video" controls />
        </div>
        <div className="flex">
        <ReactPlayer url={url} className="video" controls />
        </div>
        <div className="flex">
        <ReactPlayer url={url} className="video" controls />
        </div>
      
    </div>
  );
};

export default VideoPage;
