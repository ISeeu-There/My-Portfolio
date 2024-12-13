import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center  whitespace-nowrap rounded-full text-bse font-semibold ring-offset-white transition-colors ",
  {
    variants: {
      variant: { 
        default: "bg-cyan-500 text-stone-950 hover:bg-cyan-500-hover ",
        primary:'bg-stone-950 text-white',
        outline:'border border-cyan-500 bg-transparent text-cyan-500 hover:bg-cyan-500 hover:text-stone-950'
        
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
