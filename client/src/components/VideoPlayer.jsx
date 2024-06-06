"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";

const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div>
      <div ref={ref} className="w-auto h-screen"></div>
    </div>
  );
};
export default VideoPlayer;
