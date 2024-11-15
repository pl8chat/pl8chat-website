import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define variants using cva
const textareaVariants = cva(
  "w-full h-[42px] px-[13px] py-[9px] bg-white border-gray-300 focus:ring-0 focus:outline-none focus:border-[#00695c] text-base font-normal leading-normal border-2 rounded-md",
  {
    variants: {
      variant: {
        default: "border-input",
        error: "border-red-500 text-red-700",
        message: "text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type TextareaProps = React.ComponentProps<"textarea"> &
  VariantProps<typeof textareaVariants> & {
    label: string;
  };

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, label, variant, ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={props.id} className={`text-gray-700 text-sm leading-tight ${variant === 'message' ? 'font-semibold' : 'font-medium'}`}>
          {label}
        </label>
        <textarea
          className={cn(textareaVariants({ variant }), className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
