import { forwardRef, ForwardRefRenderFunction } from "react";
import { StyledInput } from "./StyledInput";
interface StyledInputProps {
  placeholder: string;
  value?: string;
  name?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, StyledInputProps> = ({
  placeholder,
  value,
  onChange,
  name,
  type,
  ...rest
},ref) => {
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      ref={ref}
      {...rest}
    />
  );
};
export const Input = forwardRef(InputBase);