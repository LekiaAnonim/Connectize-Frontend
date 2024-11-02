import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function DiscoverPost() {
  return (
    <section>
      <Tabs variant="solid-rounded">
        <TabList className="justify-between">
          <Tab>Markets</Tab>
          <Tab>Services</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Posts />
          </TabPanel>
          <TabPanel>
            <Posts />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
}

export default DiscoverPost;

const Posts = ({ array }) => {
  const newArray = array || [1, 2];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {newArray.map((_, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md">
          <h3 className="font-bold">Remote Monitoring and Control</h3>
          <p className="text-gray-500 mb-2">
            This is a tweet. It can be long, or short. Depends on what you have
            to say.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">West Land Oil</span>
            <button className="text-blue-500">View</button>
          </div>
        </div>
      ))}
    </section>
  );
};

// <section className="flex justify-between items-center mb-4">
//         <button className="bg-gold text-black px-4 py-2 rounded-lg">
//           Markets
//         </button>
//         <button className="text-gray-600 px-4 py-2">Services</button>
//       </section>
