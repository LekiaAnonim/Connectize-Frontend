import React from "react";
import { Tabs } from "@chakra-ui/react";

function DiscoverPost() {
  return (
    <section>
      <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1">
        <Tabs.List>
          <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab-1">Tab 1: Content</Tabs.Content>
        <Tabs.Content value="tab-2">Tab 2: Content</Tabs.Content>
        <Tabs.Content value="tab-3">Tab 3: Content</Tabs.Content>
      </Tabs.Root>
      <section className="flex justify-between items-center mb-4">
        <button className="bg-gold text-black px-4 py-2 rounded-lg">
          Markets
        </button>
        <button className="text-gray-600 px-4 py-2">Services</button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </section>
    </section>
  );
}

export default DiscoverPost;
