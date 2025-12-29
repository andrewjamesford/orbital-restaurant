import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full rounded-xl border border-white/10 bg-cosmos-900/50 px-5 py-4 font-body text-base text-white placeholder:text-white/40 backdrop-blur-xl transition-all duration-300 focus:border-nebula-500/50 focus:outline-none focus:ring-2 focus:ring-nebula-500/20 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
