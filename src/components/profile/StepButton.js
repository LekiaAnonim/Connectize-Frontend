import React from "react";
import { ArrowLeft, GreaterThan } from "../../icon";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function StepButton({
  nextStep = "contact",
  stepText = "Next",
  stepDirection = "next",
  doStepChange = () => false,
}) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        const canMove = doStepChange();

        if (canMove) navigate(`/${nextStep}`);
      }}
      className="!bg-gold shadow-sm flex items-center gap-1 p-4 hover:opacity-60 transition-all duration-300"
    >
      <span>{stepText}</span>
      {stepDirection === "next" ? <GreaterThan /> : <ArrowLeft />}
    </Button>
  );
}

export default StepButton;
