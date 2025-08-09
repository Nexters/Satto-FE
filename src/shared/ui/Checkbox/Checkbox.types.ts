import type React from "react";

export interface CheckboxProps {
  id?: string;
  name?: string;
  value?: string;
  checked: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  className?: string;
  onChange?: (checked: boolean) => void;
}
