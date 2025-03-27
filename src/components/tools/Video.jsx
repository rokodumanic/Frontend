import React, { useRef, useEffect } from "react";
import styles from "./video.module.css";

function VideoPlayer({
  src,
  controls = true,
  width = "100%",
  height = "auto",
}) {
  const videoRef = useRef(null);

  return (
    <div className={`${styles.videoContainer} relative h-screen w-screen overflow-hidden`}>
      <video
        className={`${styles.video} absolute inset-0 w-full h-full object-cover`}
        ref={videoRef}
        src={src}
        controls={false}
        width={width}
        height={height}
        muted
        autoPlay
        loop
        onError={(error) => console.error("Video error:", error)}
      />
    </div>
  );
}

export default VideoPlayer;
