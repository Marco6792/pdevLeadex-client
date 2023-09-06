import React from "react";
import ReactPlayer from "react-player";

const VideoPage = () => {
  const url = ["https://vimeo.com/860706802?share=copy"];
  return (
    <div className="grid  grid-cols-2 mt-[100rem] justify-center items-center gap-x-10 gap-y-6 xl:max-w-6xl mx-auto max-xl:grid-cols-1 px-4">
        <div className="flex border">
        <div style="padding:56.34% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/861833073?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="10000000_496829205436638_241453143440490665_n"></iframe></div>
        </div>
    </div>
  );
};

export default VideoPage;
