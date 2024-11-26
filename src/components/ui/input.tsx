import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full h-[42px] px-[13px] py-[9px] bg-white rounded-md focus:ring-0 focus:outline-none focus:border-pl8Green text-base font-normal leading-normal border text-gray-900",
  {
    variants: {
      variant: {
        default: "border-gray-300 rounded-md",
        phone: "pl-[50px] border-gray-300 rounded-md",
        error: "border-red-500 text-red-700 rounded-md",
        contact: 'border-gray-300 rounded-md',
        message: 'text-sm',
        checkout: 'border-gray-300 rounded-md placeholder:text-[#adadaf] placeholder:text-sm',
        promoCode: 'border-gray-300 rounded-md placeholder:text-gray-500 text-sm',
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & {
    label?: string;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, variant, ...props }, ref) => {
    return (
      <div className={`w-full flex flex-col gap-2 ${label ? 'h-[70px]' : ''}`}>
        {label && <label htmlFor={props.id} className={`text-gray-900 text-sm leading-tight h-5 flex items-center ${variant === 'contact' ? 'font-semibold' : 'font-medium'}`}>
          {label}
        </label>}
        <div className="relative">
          {variant === "phone" ? (
            // Render specific structure for the phone variant
              <input
                className={cn(inputVariants({ variant }), "pl-[50px]", className)}
                ref={ref}
                {...props}
              />
          ) : (
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
