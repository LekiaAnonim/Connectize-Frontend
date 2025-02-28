import React from "react";
import HeadingText from "../../../components/HeadingText";
import LightParagraph from "../../../components/ParagraphText";

export default function Content({ array = [] }) {
  return (
    <section className="w-3/4 p-4">
      {array.map((item, index) => {
        return (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Last Updated: {item.lastUpdated}
            </p>
            <p className="text-gray-500 mb-4">{item.content}</p>
            {item.details.map((detail, idx) => (
              <div
                key={idx}
                className="mb-4"
                id={detail.heading.replace(/\s+/g, "-").toLowerCase()}
              >
                <HeadingText heading="sub-heading">
                  {detail.heading}
                </HeadingText>
                <LightParagraph>{detail.text}</LightParagraph>
              </div>
            ))}
          </section>
        );
      })}
    </section>
  );
}
