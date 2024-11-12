// Input.tsx
import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define input styles and variants with cva
const inputVariants = cva(
  "block w-full rounded-md border-0 py-1.5 text-offBlack shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkGreen sm:text-sm/6",
  {
    variants: {
      variant: {
        default: "",
        second: '',
        error: "border border-red-500 text-red-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Define prop types with VariantProps
type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & {
    label?: string; // Add the label prop
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, variant, ...props }, ref) => {
    return (
      <div>
        {label && <label className="block text-sm font-medium text-gray-700 mb-1 mt-2">{label}</label>}
        <input
          className={cn(inputVariants({ variant }), className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
