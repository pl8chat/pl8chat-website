import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define variants using cva
const textareaVariants = cva(
  "w-full h-[42px] px-[20px] py-[9px] bg-white font-normal leading-normal rounded-[14px]",
  {
    variants: {
      variant: {
        default: "border-input",
        error: "border-red-500 text-red-700",
        message: "text-sm",
        talkToSales: "text-sm min-h-[140px] border-none pt-0 focus:ring-0 pt-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type TextareaProps = React.ComponentProps<"textarea"> &
  VariantProps<typeof textareaVariants> & {
    label?: string; // label is now optional
  };

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, variant, ...props }, ref) => {
    return (
      <div className={`w-full flex flex-col gap-2 ${label ? 'h-[70px]' : ''}`}>
        {label && (
          <label
            htmlFor={props.id}
            className={`text-gray-900 text-sm leading-tight ${variant === 'message' ? 'font-semibold' : 'font-medium'}`}
          >
            {label}
          </label>
        )}
        <div className="bg-white border rounded-[14px] min-h-[168px] text-sm border-gray-400 hover:border-[#034B48] focus:border-[#00695c] focus:ring-0 focus:outline-none">
          <div className="px-5 pt-4">
            Tell us about your parking (optional)
          </div>
          <textarea
            className={cn(textareaVariants({ variant }), className)}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
