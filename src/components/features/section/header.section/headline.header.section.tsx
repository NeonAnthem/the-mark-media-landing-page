"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import {
  DEFAULT_VARIANCE,
  useSectionHeaderVariance,
} from "./store/header.store";

const headlineVariant = cva("w-max", {
  variants: {
    variant: {
      editorial:
        "text-start items-start col-start-1 col-end-2 row-start-1 row-end-2",
      center: "text-center",
    },
    size: {
      base: "",
      sm: "",
      xl: "",
    },
  },
  defaultVariants: DEFAULT_VARIANCE,
});

export interface ISectionHeadlineProps
  extends ComponentProps<"p">, VariantProps<typeof headlineVariant> {
  blockType?: "default" | "tag";
}

export function SectionHeadline({
  children,
  variant,
  blockType = "default",
  size,
  ...props
}: ISectionHeadlineProps) {
  const variance = useSectionHeaderVariance({ variant, size });
  const Comp = blockType === "default" ? HeadlineDefault : HeadlineTag;

  return (
    <div className={cn(headlineVariant(variance))}>
      <Comp {...props}>{children}</Comp>
    </div>
  );
}

function HeadlineDefault({ children, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-sm md:text-[1rem] text-muted-foreground uppercase font-medium",
      )}
      {...props}
    >
      {children}
    </p>
  );
}

function HeadlineTag({ children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex gap-2 items-center px-2 pr-3.5 py-0.5 bg-linear-135 from-base dark:from-background to-background dark:to-muted-accent border rounded-full text-muted-foreground",
        "[&>svg]:size-4",
      )}
      {...props}
    >
      {children}
    </div>
  );
}
