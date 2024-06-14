"use client";
import { getUserData } from "@/utils/GoogleAuthHandler";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
const SearchParamsComp = ({ setUserId }) => {
  const searchParams = useSearchParams();
  useEffect(() => {
    const userId = searchParams.get("id");

    if (userId) {
      setUserId(userId);
    }
  }, []);
  return <div className="hidden"></div>;
};
const Page = () => {
  const [userId, setUserId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [availableInterests, setAvailableInterests] = useState([
    { icon: "📷", name: "Photography" },
    { icon: "🎨", name: "Art" },
    { icon: "✂️", name: "Crafts" },
    { icon: "💃", name: "Dancing" },
    { icon: "✏️", name: "Design" },
    { icon: "💄", name: "Make-up" },
    { icon: "🎥", name: "Making videos" },
    { icon: "🎤", name: "Singing" },
    { icon: "✍️", name: "Writing" },
    { icon: "🏃", name: "Athletics" },
    { icon: "🏸", name: "Badminton" },
    { icon: "⚾️", name: "Baseball" },
    { icon: "🏀", name: "Basketball" },
    { icon: "🧗", name: "Bouldering" },
    { icon: "🎳", name: "Bowling" },
    { icon: "🥊", name: "Boxing" },
    { icon: "🚣", name: "Crew" },
    { icon: "🏏", name: "Cricket" },
    { icon: "🚲", name: "Cycling" },
    { icon: "🏈", name: "Football" },
    { icon: "🏎️", name: "Go karting" },
    { icon: "⛳️", name: "Golf" },
    { icon: "🤸", name: "Gym" },
    { icon: "🤸‍♀️", name: "Gymnastics" },
    { icon: "🤾", name: "Handball" },
    { icon: "🏒", name: "Hockey" },
    { icon: "🐎", name: "Horse riding" },
    { icon: "🥋", name: "Martial arts" },
    { icon: "🧘", name: "Meditation" },
    { icon: "🏐", name: "Netball" },
    { icon: "🧘‍♀️", name: "Pilates" },
    { icon: "🏓", name: "Ping pong" },
    { icon: "🏉", name: "Rugby" },
    { icon: "🏃‍♀️", name: "Running" },
    { icon: "🛹", name: "Skateboarding" },
    { icon: "⛷️", name: "Skiing" },
  ]);
  const dispatch = useDispatch();
  const router = useRouter();

  //fardeen
  useEffect(() => {
    if (userId) {
      getUserData(userId, dispatch, router);
    }
  }, [userId]);
  const handleSelectInterest = (interest) => {
    if (!selectedInterests.includes(interest) && selectedInterests.length < 5) {
      setSelectedInterests((prevInterests) => [...prevInterests, interest]);
      setAvailableInterests((prevInterests) =>
        prevInterests.filter((i) => i !== interest)
      );
    }
  };

  const handleDeselectInterest = (interest) => {
    setSelectedInterests((prevInterests) =>
      prevInterests.filter((i) => i !== interest)
    );
    setAvailableInterests((prevInterests) => [...prevInterests, interest]);
  };

  return (
    <div className="text-black h-full w-full">
      {/* //don't remove this */}
      <SearchParamsComp setUserId={setUserId} />
      <div className="bg-white shadow-lg p-8 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-bold ">Choose Interests: </h2>
            <p className="font-medium">Upto 5 Interests</p>
          </div>

          {/* Inside this submit button add some handleClick function */}
          <button className="px-4 py-2 rounded-full text-white bg-[#FF578E] text-lg">
            Submit
          </button>
          
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
          {selectedInterests.map((interest) => (
            <div
              key={interest.name}
              className="flex items-center flex-wrap rounded-full border-[1px] px-4 py-2 bg-[#FF578E] text-white"
            >
              <p className="flex items-center gap-5">
                {interest.icon}
                {interest.name}
              </p>
              <button
                onClick={(e) => {
                  handleDeselectInterest(interest);
                }}
                className="text-gray-600 hover:text-gray-800 ml-2"
              >
                <RxCross1 size={18} />
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 px-20">
          {availableInterests.map((interest) => (
            <div
              key={interest.name}
              className={`flex items-center justify-between rounded-full border-[1px] px-4 py-2 ${
                selectedInterests.includes(interest)
                  ? "bg-[#FF578E] text-white"
                  : "hover:bg-[#FF578E] hover:text-white"
              }`}
              onClick={() => handleSelectInterest(interest)}
            >
              <p className="flex items-center gap-5">
                {interest.icon}
                {interest.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
