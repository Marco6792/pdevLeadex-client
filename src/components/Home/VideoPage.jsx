import React from "react";
import ReactPlayer from "react-player";

const VideoPage = () => {
  const url = ["https://vimeo.com/860706802?share=copy"];
  return (
    <div className="grid  grid-cols-2 mt-[100rem] justify-center items-center gap-x-10 gap-y-6 xl:max-w-6xl mx-auto max-xl:grid-cols-1 px-4">
        <div className="flex bg-yellow-400">
        <ReactPlayer url={url} className="video" controls />
        </div>
        <div className="flex">
        <ReactPlayer url={url} className="video" controls />
        </div>
    </div>
  );
};

export default VideoPage;
