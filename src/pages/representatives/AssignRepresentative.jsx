import React from "react";
import HeadingText from "../../components/HeadingText";
import LightParagraph from "../../components/ParagraphText";
import { Input } from "@chakra-ui/react";
import clsx from "clsx";
import { inputClassNames } from "../../components/form/customInput";

export default function AssignRepresentative() {
  return (
    <section>
      <section>
        <div className="">
          <HeadingText>Assign Representatives</HeadingText>
          <LightParagraph>
            please assign representatives and specify the category for
            representation e.g (human resources, technical, commercial)
          </LightParagraph>
        </div>

        <div className="">
          <div className="flex flex-col gap-0.5 w-full">
            <label htmlFor="username" className="text-base leading-none">
              Username
            </label>
            <Input
              id="username"
              className={clsx(
                inputClassNames,
                "!rounded-full focus:!border-gold focus:out !mt-0"
              )}
            />
            <small className="text-gray-400">Search for: </small>
          </div>
        </div>
      </section>
    </section>
  );
}
