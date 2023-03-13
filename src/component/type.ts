export interface StepOneProps {
  onSubmit: (name: string) => void;
}

export interface StepTwoProps {
  name: string;
  onContinue: (newName: string) => void;
  onChangeName: (name: string) => void;
}

export interface PhotoGridProps {
  name: string;
}

export interface IDogPhoto {
  message: string;
  status: string;
}
