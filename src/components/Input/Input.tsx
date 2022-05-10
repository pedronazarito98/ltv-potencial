import { ReactNode } from "react";
import { StyledInput } from "./StyledInput";

interface StyledInput {
  placeholder: string;
  value?: string;
}

export function Input({ placeholder, value, ...rest }: StyledInput) {
  return <StyledInput placeholder={placeholder} value={value} />;
}
