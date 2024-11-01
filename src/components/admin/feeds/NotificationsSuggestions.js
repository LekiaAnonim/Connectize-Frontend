import React from "react";

const NotificationsSuggestions = () => {
  return (
    <div className=" h-fit w-full xl:w-1/4 flex flex-col md:flex-row xl:flex-col shrink-0 gap-2">
      <div className="bg-white rounded p-4">
        <h2 className="text-lg font-bold">Notifications</h2>
        <ul>
          {["Disney", "MasterCard", "IBM"].map((company, index) => (
            <li key={index} className="mb-2 text-gray-700">
              <span className="text-sm">{company}</span> tagged you in a post
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded p-4">
        <h2 className="text-lg font-bold mb-2">Suggested</h2>
        <ul>
          {["McFly", "JohnDoe", "Janis Joplin"].map((user) => (
            <li key={user} className="flex items-center mb-4">
              <img
                src={`${user.toLowerCase()}.png`}
                alt={user}
                className="h-8 w-8 rounded-full mr-2"
              />
              <span className="text-gray-700">{user}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationsSuggestions;
