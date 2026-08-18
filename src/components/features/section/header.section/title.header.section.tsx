"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import {
  DEFAULT_VARIANCE,
  useSectionHeaderVariance,
} from "./store/header.store";

const titleVariant = cva(
  cn(
    "", // Component Wrapper Class
    "*:leading-none *:text-foreground *:font-medium", // Child Text Class
  ),
  {
    variants: {
      variant: {
        editorial: "text-start col-start-1 col-end-2 row-start-2 row-end-3",
        center: "text-center",
      },
      size: {
        base: "text-[20px] md:text-[36px]",
        sm: "",
        xl: "md:text-5xl",
      },
    },
    defaultVariants: DEFAULT_VARIANCE,
  },
);

export interface ISectionTitleProps
  extends ComponentProps<"h2">, VariantProps<typeof titleVariant> {}

export function SectionTitle({
  children,
  variant,
  size,
  ...props
}: ISectionTitleProps) {
  const variance = useSectionHeaderVariance({ variant, size });

  return (
    <div className={cn(titleVariant(variance))}>
      <h2 {...props}>{children}</h2>
    </div>
  );
}
