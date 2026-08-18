"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ISectionProps extends ComponentProps<"section"> {
  isDark?: boolean;
}

function Section({ children, className, isDark, ...props }: ISectionProps) {
  // Replace prop injected to store managed sections

  return (
    <section
      {...props}
      className={cn(
        "bg-background py-8",
        "**:data-[block=contain]:container **:data-[block=contain]:mx-auto",
        "**:data-[block=contain]:px-4 **:data-[block=contain]:text-center", // Mobile Viewport
        "", // Tablet Viewport
        "", // Desktop Viewport
        className,
        {
          dark: isDark,
        },
      )}
    >
      {children}
    </section>
  );
}

export { Section };
