"use client";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interests = [
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
  ];

  const handleSelectInterest = (interest) => {
    if (
      !selectedInterests.includes(interest) &&
      selectedInterests.length < 10
    ) {
      setSelectedInterests((prevInterests) => [...prevInterests, interest]);
    }
  };

  const handleDeselectInterest = (interest) => {
    setSelectedInterests((prevInterests) =>
      prevInterests.filter((i) => i !== interest)
    );
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => setShowPopup(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        My Interests
      </button>

      {showPopup && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-8 right-4 text-gray-600 hover:text-gray-800"
            >
              <RxCross1 size={22} />
            </button>
            <h2 className="text-xl font-bold mb-4">My Interests</h2>
            <div className="grid grid-cols-3 gap-4">
              {interests.map((interest) => (
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
                  {selectedInterests.includes(interest) && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeselectInterest(interest);
                      }}
                      className="text-gray-600 hover:text-gray-800 ml-2"
                    >
                      <RxCross1 size={18} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
