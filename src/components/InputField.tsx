import React, { useState } from "react";
import clsx from "clsx";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
  passwordToggle?: boolean;
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-transparent focus:border-blue-500",
  outlined: "border border-gray-400 focus:border-blue-500",
  ghost: "border-none bg-transparent focus:border-blue-500",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable,
  passwordToggle,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Determine actual input type
  const inputType =
    passwordToggle && type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      )}

      <div className="relative flex items-center">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={invalid}
          aria-disabled={disabled}
          className={clsx(
            "rounded-lg outline-none transition-all w-full pr-20", // padding for buttons
            sizeClasses[size],
            variantClasses[variant],
            invalid && "border-red-500 focus:border-red-500",
            disabled && "bg-gray-200 cursor-not-allowed"
          )}
        />

        {/* Right-side buttons wrapper */}
        <div className="absolute right-2 flex items-center space-x-2">
          {/* Clear button */}
          {clearable && value && !disabled && (
            <button
              type="button"
              onClick={() =>
                onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
              }
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}

          {/* Password toggle */}
          {passwordToggle && type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-gray-400 hover:text-gray-600 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          )}
        </div>
      </div>

      {helperText && !invalid && (
        <span className="text-xs text-gray-500 mt-1">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      )}
    </div>
  );
};
export default InputField;