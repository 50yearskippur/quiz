import { useEffect } from 'react';
import { STEPS, StepsProvider, useSteps } from './logic/context';

const Main = () => {
  const { currentStep, getCurrentStep } = useSteps();

  useEffect(() => {
    getCurrentStep();
  }, []);

  return STEPS[currentStep];
};

function App() {
  return (
    <StepsProvider>
      <Main />
    </StepsProvider>
  );
}

export default App;
