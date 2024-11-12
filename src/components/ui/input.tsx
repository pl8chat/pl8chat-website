// Input.tsx
import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define input styles and variants with cva
const inputVariants = cva(
  "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",
  {
    variants: {
      variant: {
        default: "border border-input",
        error: "border border-red-500 text-red-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Define prop types with VariantProps
type InputProps = React.ComponentProps<"input"> & VariantProps<typeof inputVariants>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
