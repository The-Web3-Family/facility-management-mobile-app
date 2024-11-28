import { create } from "zustand";
import { persist } from "zustand/middleware";

type StepState = {
  step: number;
  setStep: (newStep: number | ((prev: number) => number)) => void;
};

const useStepStore = create<StepState>((set) => ({
  step: 0,
  setStep: (newStep) =>
    set((state) => ({
      step: typeof newStep === "function" ? newStep(state.step) : newStep,
    })),
}));

export default useStepStore;
