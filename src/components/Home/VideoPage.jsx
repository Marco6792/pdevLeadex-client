import React from "react";
import ReactPlayer from "react-player";

const VideoPage = () => {
  const url = ["https://vimeo.com/860706802?share=copy"];
  return (
    <div className="grid  grid-cols-2 mt-[100rem] justify-center items-center gap-x-10 gap-y-6 xl:max-w-6xl mx-auto max-xl:grid-cols-1 px-4">
        <div className="flex border">
        <ReactPlayer
        //url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        // url="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
        url="https://vimeo.com/860706802?share=copy"
        playing={true}
        controls={true}
        // volume={null}
        // muted={false}
        //width="100%"
        //height="100%"
      />
        </div>
    </div>
  );
};

export default VideoPage;
