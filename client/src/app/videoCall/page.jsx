"use client";
import React, { useEffect, useState } from "react";
import AgoraRTC, { createClient } from "agora-rtc-sdk-ng";
import VideoPlayer from "@/components/VideoPlayer";
const APP_ID = "03d44a1c16a54c0fb0d2ad170a2fd29e";
const TOKEN = "007eJxTYOAufbdSXf9Vc8Mt113feDyb9lz12VGjnTbp6IbMNl93dXsFBgPjFBOTRMNkQ7NEU5Nkg7QkgxSjxBRDc4NEo7QUI8tUu9eJaQ2BjAynbrewMjJAIIjPyZBb6ZyRmJeXmsPAAAAV/CJB";
const CHANNEL = "myChannel";

AgoraRTC.setLogLevel(4);

let agoraCommandQueue = Promise.resolve();

const createAgoraClient = ({ onVideoTrack, onUserDisconnected }) => {
  const client = createClient({
    mode: "rtc",
    codec: "vp8",
  });

  let tracks;

  const waitForConnectionState = (connectionState) => {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (client.connectionState === connectionState) {
          clearInterval(interval);
          resolve();
        }
      }, 200);
    });
  };

  const connect = async () => {
    await waitForConnectionState("DISCONNECTED");

    const uid = await client.join(APP_ID, CHANNEL, TOKEN, null);

    client.on("user-published", (user, mediaType) => {
      client.subscribe(user, mediaType).then(() => {
        if (mediaType === "video") {
          onVideoTrack(user);
        }
      });
    });

    client.on("user-left", (user) => {
      onUserDisconnected(user);
    });

    tracks = await AgoraRTC.createMicrophoneAndCameraTracks();

    await client.publish(tracks);

    return {
      tracks,
      uid,
    };
  };

  const disconnect = async () => {
    await waitForConnectionState("CONNECTED");
    client.removeAllListeners();
    for (let track of tracks) {
      track.stop();
      track.close();
    }
    await client.unpublish(tracks);
    await client.leave();
  };

  return {
    disconnect,
    connect,
  };
};

const VideoRoom = () => {
  const [users, setUsers] = useState([]);
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const onVideoTrack = (user) => {
      setUsers((previousUsers) => [...previousUsers, user]);
    };

    const onUserDisconnected = (user) => {
      setUsers((previousUsers) =>
        previousUsers.filter((u) => u.uid !== user.uid)
      );
    };

    const { connect, disconnect } = createAgoraClient({
      onVideoTrack,
      onUserDisconnected,
    });

    const setup = async () => {
      const { tracks, uid } = await connect();
      setUid(uid);
      setUsers((previousUsers) => [
        ...previousUsers,
        {
          uid,
          audioTrack: tracks[0],
          videoTrack: tracks[1],
        },
      ]);
    };

    const cleanup = async () => {
      await disconnect();
      setUid(null);
      setUsers([]);
    };

    // setup();
    agoraCommandQueue = agoraCommandQueue.then(setup);

    return () => {
      // cleanup();
      agoraCommandQueue = agoraCommandQueue.then(cleanup);
    };
  }, []);

  return (
    <>
      <div className="w-auto h-screen">
        <div className="w-auto h-full">
          {users.map((user) => (
            <VideoPlayer key={user.uid} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};
export default VideoRoom;
