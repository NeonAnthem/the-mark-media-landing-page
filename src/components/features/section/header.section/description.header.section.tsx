"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import {
  DEFAULT_VARIANCE,
  useSectionHeaderVariance,
} from "./store/header.store";

const descriptionVariant = cva("", {
  variants: {
    variant: {
      editorial:
        "text-end self-start col-start-2 col-end-3 row-start-1 row-end-3",
      center: "text-center pt-4",
    },
    size: {
      base: "",
      sm: "",
      xl: "",
    },
  },
  defaultVariants: DEFAULT_VARIANCE,
});

export interface ISectionDescriptionProps
  extends ComponentProps<"p">, VariantProps<typeof descriptionVariant> {}

export function SectionDescription({
  children,
  variant,
  size,
  ...props
}: ISectionDescriptionProps) {
  const variance = useSectionHeaderVariance({ variant, size });

  return (
    <div
      className={cn(
        "text-foreground",
        "text-start max-sm:text-sm text-muted-foreground w-full",
        descriptionVariant(variance),
      )}
    >
      <p {...props}>{children}</p>
    </div>
  );
}
