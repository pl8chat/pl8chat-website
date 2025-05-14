import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full h-[42px] px-[13px] py-[9px] bg-white rounded-md focus:outline-none text-base font-normal leading-normal border text-gray-900",
  {
    variants: {
      variant: {
        default: "border-gray-300 rounded-md focus:border-[#034b48] focus:ring-0",
        phone: "pl-[50px] border-gray-300 rounded-md focus:border-[#034b48] focus:ring-0",
        error: "border-[#f44e38] text-red-700 rounded-md focus:border-[#f44e38] focus:ring-0",
        contact: "border-gray-300 rounded-md focus:border-[#034b48] focus:ring-0",
        message: "text-sm focus:border-[#034b48] focus:ring-0",
        checkout: "border-gray-300 rounded-md placeholder:text-[#adadaf] placeholder:text-sm focus:border-[#034b48] focus:ring-0",
        promoCode: "border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:border-[#034b48] focus:ring-0",
        hero: "w-full md:w-[370px] h-12 pl-3 pr-5 py-2 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] inline-flex justify-start items-center gap-2 overflow-hidden border-[1px] focus:border-[2px] focus:ring-0"


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