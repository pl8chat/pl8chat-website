import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define variants using cva
const textareaVariants = cva(
  "w-full px-[20px] pt-[8px] bg-white font-normal leading-normal rounded-[14px]",
  {
    variants: {
      variant: {
        default: "border-input",
        error: "border-red-500 text-red-700",
        message: "text-sm",
        talkToSales: "w-full min-w-[284px] max-w-[400px] text-sm min-h-[140px] border-none pt-0 focus:ring-0 pt-2",
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
        <div className="relative h-[168px] w-full min-w-[284px] max-w-[400px] bg-white border border-gray-400 rounded-[14px] text-sm hover:border-[#034B48] focus-within:border-[#00695c] focus-within:ring-0 focus-within:outline-none flex flex-col z-0 overflow-hidden">
          <div className="z-10 bg-white px-5 pt-4 pb-1 text-gray-900 text-sm shrink-0 relative">
            Tell us about your parking (optional)
          </div>
          <textarea
            className={cn(
              textareaVariants({ variant }),
              'resize-none flex-1 min-h-0 px-5 pb-3',
              className
            )}
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
