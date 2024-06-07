import React from "react";

const PendingRequest = (props) => {
  return (
    <div className="flex items-center justify-between p-5 text-black">
      <div className="flex items-center gap-2">
        <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          className="object-cover h-16 w-16 rounded-full"
          alt=""
        />
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold">Ayaush</h1>
            <h2>@ayaush</h2>
          </div>

          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, veritatis.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-primary-300 p-2 rounded-lg">Ignore</button>
        <button className="bg-primary-500 font-bold p-2 rounded-lg">
          Accept
        </button>
      </div>
    </div>
  );
};

export default PendingRequest;
