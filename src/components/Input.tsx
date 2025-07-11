import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { MdError } from "react-icons/md";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const inputVariants = cva(
  "w-full px-3 py-2 border rounded-md text-sm focus:outline-none transition-colors",
  {
    variants: {
      status: {
        default: "border-gray-300 text-black focus:ring-2 focus:ring-gray-400",
        error: "border-red-500 text-red-700 focus:ring-2 focus:ring-red-400",
        success:
          "border-green-500 text-green-700 focus:ring-2 focus:ring-green-400",
      },
      inputSize: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-4 py-2.5 text-lg",
      },
    },
    defaultVariants: {
      status: "default",
    },
  }
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  status?: "default" | "error" | "success";
  inputSize?: "sm" | "md" | "lg";
  type?: React.HTMLInputTypeAttribute;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      status = "default",
      inputSize = "md",
      type = "text",
      className,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordType = type === "password";
    const inputType = isPasswordType && showPassword ? "text" : type;

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    return (
      <div className="space-y-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            className={clsx(inputVariants({ status, inputSize }), className, {
              "pr-10": isPasswordType || status !== "default", // reserve space for icon
            })}
            {...props}
          />

          {/* Show eye icon for password */}
          {isPasswordType && (
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </button>
          )}

          {/* Error or success icon if not password type */}
          {!isPasswordType && status === "error" && (
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 text-sm">
              <MdError />
            </span>
          )}
          {!isPasswordType && status === "success" && (
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500 text-sm">
              <IoCheckmarkCircleOutline />
            </span>
          )}
        </div>

        {helperText && (
          <p
            className={clsx("text-xs", {
              "text-gray-500": status === "default",
              "text-red-500": status === "error",
              "text-green-500": status === "success",
            })}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
