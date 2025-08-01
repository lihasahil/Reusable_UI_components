import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utilitis";

const buttonClasses = cva(
  "transition duration-200 cursor-pointer font-medium",
  {
    variants: {
      variant: {
        primary:
          "bg-purple-500 text-white hover:bg-purple-300 active:bg-purple-700 rounded-md disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
        secondary:
          "bg-purple-200 text-purple-700 hover:bg-purple-300 rounded-md disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
        outline:
          "border border-purple-500 text-purple-500 hover:border-purple-950 hover:text-purple-950 rounded-md disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed",
        rounded:
          "bg-purple-500 text-white hover:bg-purple-300 active:bg-purple-700 rounded-full disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
        square:
          "bg-purple-500 text-white hover:bg-purple-300 active:bg-purple-700 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
        text: "text-purple-600 hover:text-purple-950 rounded-md disabled:text-gray-400 disabled:cursor-not-allowed",
      },
      size: {
        sm: "w-24 h-8 text-sm",
        md: "w-32 h-10 text-base",
        lg: "w-40 h-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonClasses({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
