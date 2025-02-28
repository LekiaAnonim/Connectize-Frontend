import React from "react";

export default function Content({ array = [] }) {
  return (
    <section className="w-3/4 p-4">
      {array.map((policy, index) => {
        return (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {policy.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Last Updated: {policy.lastUpdated}
            </p>
            <p className="text-gray-600 mb-4">{policy.content}</p>
            {policy.details.map((detail, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  {detail.heading}
                </h3>
                <p className="text-gray-600">{detail.text}</p>
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
}
