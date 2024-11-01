import React from "react";
import ResponsiveNav from "../../ResponsiveNav";
import { useNav } from "../../../context/navContext";

const DiscoverFeed = () => {
  const { toggleNav } = useNav();
  return (
    <>
      <ResponsiveNav />
      <div
        className="rounded py-2 max-md:container md:w-1/2 lg:w-3/5"
        onClick={() => toggleNav(false)}
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Discover</h2>
          <input
            type="text"
            placeholder="What's happening"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <button className="bg-yellow-200 text-black px-4 py-2 rounded-lg">
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
    </>
  );
};

export default DiscoverFeed;
