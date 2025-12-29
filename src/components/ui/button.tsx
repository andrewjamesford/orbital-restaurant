import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-display font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula-500 focus-visible:ring-offset-2 focus-visible:ring-offset-void-950 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-nebula-600 to-nebula-500 text-white hover:from-nebula-500 hover:to-nebula-400 hover:shadow-lg hover:shadow-nebula-500/30 hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "backdrop-blur-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-nebula-500/50",
        outline:
          "border-2 border-nebula-500/50 bg-transparent text-nebula-400 hover:bg-nebula-500/10 hover:border-nebula-500",
        ghost:
          "text-nebula-400 hover:text-nebula-300 hover:bg-nebula-500/10",
        link:
          "text-nebula-400 underline-offset-4 hover:underline hover:text-nebula-300",
      },
      size: {
        default: "px-8 py-4 text-sm rounded-full",
        sm: "px-5 py-2.5 text-xs rounded-full",
        lg: "px-10 py-5 text-base rounded-full",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
