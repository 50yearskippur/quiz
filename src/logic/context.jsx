import { createContext, useContext, useState } from 'react';
import Home from '../steps/home';
import Instructions from '../steps/instructions';
import Step1 from '../steps/step1';
import Step2 from '../steps/step2';
import Step3 from '../steps/step3';
import Step4 from '../steps/step4';
import Step5 from '../steps/step5';
import Step6 from '../steps/step6';
import Step7 from '../steps/step7';
import Step8 from '../steps/step8';
import Done from '../steps/done';

const STORAGE_KEY = 'step';
export const STEPS = {
  home: <Home />,
  ins: <Instructions />,
  step1: <Step1 />,
  step2: <Step2 />,
  step3: <Step3 />,
  step4: <Step4 />,
  step5: <Step5 />,
  step6: <Step6 />,
  step7: <Step7 />,
  step8: <Step8 />,
  done: <Done />
};

const StepsContext = createContext();

function StepsProvider ({ children }) {
  const [currentStep, setCurrentStep] = useState(Object.keys(STEPS)[0]);

  const getCurrentStep = () => {
    const step = localStorage.getItem(STORAGE_KEY) ?? Object.keys(STEPS)[0];
    setCurrentStep(step);
  };

  const goToNext = () => {
    const nextStepIndex = Object.keys(STEPS).indexOf(currentStep) + 1;
    const nextStep = Object.keys(STEPS)[Math.min(nextStepIndex, Object.keys(STEPS).length - 1)];
    localStorage.setItem(STORAGE_KEY, nextStep);

    setCurrentStep(nextStep);
  };

  const value = { currentStep, getCurrentStep, goToNext };
  return <StepsContext.Provider value={value}>{children}</StepsContext.Provider>;
}

function useSteps () {
  const context = useContext(StepsContext);

  if (context === undefined) {
    throw new Error('useSteps must be used within a StepsProvider');
  }
  return context;
}

export { StepsProvider, useSteps };
