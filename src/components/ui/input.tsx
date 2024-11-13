// Input.tsx
import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define input styles and variants with cva
const inputVariants = cva(
  "self-stretch h-[42px] px-[13px] py-[9px] bg-white rounded-md border-2 border-[#00695c] justify-start items-center inline-flex",
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
    label: string;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, variant, ...props }, ref) => {
    return (
      <div className="self-stretch h-[66px] flex-col justify-start items-start gap-1 flex">
        <label className="text-gray-700 text-sm font-medium leading-tight">
          {label}
        </label>
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
