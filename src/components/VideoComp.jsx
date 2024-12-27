import React from "react";

function Video() {
  return (
    <div className="absolute top-[944px] sm:p-0 sm:top-[1125px] md:top-[1675px] lg:top-[1450px] left-0 w-full flex justify-center p-4 ">
      <div className="w-full max-w-[1079px] aspect-video">
        <video
          className="w-full h-full object-cover rounded-lg"
          controls
          autoPlay
          muted
          loop
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4" // Example video link
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Video;
