'use client'
import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full px-[20px] py-[9px] bg-white focus:ring-0 focus:outline-none focus:border-[#034b48] text-sm font-normal leading-normal border placeholder:text-gray-500 text-gray-900",
  {
    variants: {
      variant: {
        default: "border-gray-300 rounded-md",
        phone: "pl-[50px] border-gray-300 rounded-md",
        error: "border-[#f44e38] text-red-700 rounded-md",
        contact: 'border-gray-300 rounded-md',
        message: 'text-sm',
        checkout: 'border-gray-300 rounded-md placeholder:text-[#adadaf] placeholder:text-sm',
        promoCode: 'border-gray-300 rounded-md text-sm',
        newsletter: 'w-full max-w-[380px] rounded-[14px] h-[44px] border-gray-400',
        talkToSales: 'w-full min-w-[284px] max-w-[400px] rounded-[14px] h-[44px] border-gray-400 hover:border-[#034B48] focus:border-[#034B48]',
        errorState: 'w-full min-w-[284px] max-w-[400px] h-[44px] border-red-500 text-red-700 rounded-[14px] text-sm',
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
    error?: string;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, variant, error, ...props }, ref) => {
    return (
      <div className={`flex flex-col w-auto gap-2 ${label ? 'h-[70px]' : ''} ${error ? 'h-[55px] md:h-[66px]' : ''} ${variant === 'talkToSales' ? 'w-full' : ''}`}>
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
          {error && (
            <span className="mt-1 text-[9px] md:text-sm text-red-600 h-[10px] md:min-h-[20px] block">
              {error || ""}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
