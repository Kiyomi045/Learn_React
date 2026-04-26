import video1 from "./video/video1.mp4";
import { useRef, forwardRef, useImperativeHandle } from "react";

function Video(props, ref) {
  const videoRef = useRef("");

  useImperativeHandle(ref, () => ({
    play: () => {
      videoRef.current.play();
    },
    pause: () => {
      videoRef.current.pause();
    },
  }));
  return (
    <>
      <video src={video1} ref={videoRef}></video>
    </>
  );
}

export default forwardRef(Video);
