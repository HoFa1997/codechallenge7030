import { FC, useState } from "react";
import PhotoGrid from "./PhotoGrid";
import StepOne from "./Step1";
import StepTwo from "./Step2";

const HomeIndex: FC = () => {
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);

  const handleSubmitName = (name: string) => {
    setName(name);
    setStep(2);
  };

  const handleContinue = (newName: string) => {
    setName(newName);
    setStep(3);
  };

  const handleKeepName = () => {
    setStep(3);
  };
  return (
    <>
      {step === 1 && <StepOne onSubmit={handleSubmitName} />}
      {step === 2 && (
        <StepTwo
          name={name}
          onContinue={handleContinue}
          onChangeName={handleKeepName}
        />
      )}
      {step === 3 && <PhotoGrid name={name} />}
    </>
  );
};

export default HomeIndex;
