import React from "react";
import ResponsiveNav from "../../ResponsiveNav";

const DiscoverFeed = () => {
  return (
    <div className="rounded md:w-full">
      <ResponsiveNav />
      <h1 className="text-3xl font-[400]">Discover</h1>
      <div className="my-6 bg-white px-2 xs:px-4 py-4 rounded border-b-[5px] border-gold">
        <input
          type="text"
          placeholder="What's happening"
          className="w-full pb-2 border-b border-gray-300 bg-transparent focus:outline-0 text-xl"
        />

        <div className="mt-4 flex items-center justify-between">
          <div></div>
          <button className="text-sm rounded-full bg-gold hover:bg-gold/60 py-2.5 px-4 transition-opacity duration-300">
            create post
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <button className="bg-gold text-black px-4 py-2 rounded-lg">
          Markets
        </button>
        <button className="text-gray-600 px-4 py-2">Services</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2].map((_, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h3 className="font-bold">Remote Monitoring and Control</h3>
            <p className="text-gray-500 mb-2">
              This is a tweet. It can be long, or short. Depends on what you
              have to say.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">West Land Oil</span>
              <button className="text-blue-500">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverFeed;
