import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full h-[42px] px-[13px] py-[9px] bg-white focus:ring-0 focus:outline-none focus:border-[#00695c] text-base font-normal leading-normal",
  {
    variants: {
      variant: {
        default: "border-2 border-gray-300 rounded-md",
        phone: "pl-[50px] border-2 border-gray-300 rounded-md",
        error: "border-2 border-red-500 text-red-700 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & {
    label: string;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, variant, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        <label htmlFor={props.id} className="text-gray-700 text-sm font-medium leading-tight">
          {label}
        </label>
        <div className="relative">
          {variant === "phone" ? (
            // Render specific structure for the phone variant
            <div className="flex items-center">
              <span className="absolute left-[20px] text-gray-500 tracking-[.2rem]">+1</span>
              <input
                className={cn(inputVariants({ variant }), "pl-[50px]", className)}
                ref={ref}
                {...props}
                placeholder="(555) 987-6543"
              />
            </div>
          ) : (
            // Render the default structure for other variants
            <input
              className={cn(inputVariants({ variant }), className)}
              ref={ref}
              {...props}
            />
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
