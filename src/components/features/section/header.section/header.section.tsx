"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import {
	DEFAULT_VARIANCE,
	ISectionHeaderProps,
	SectionHeaderProvider,
	useSectionHeaderVariance,
} from "./store/header.store";

const sectionHeaderVariants = cva("grid mb-8 md:mb-16 mt-10", {
	variants: {
		variant: {
			editorial: "grid-cols-2 grid-rows-2 gap-4",
			center: "grid-cols-1 grid-rows-3 gap-2",
		},
		size: {
			base: "",
			sm: "",
			xl: "",
		},
	},
	defaultVariants: DEFAULT_VARIANCE,
});

export function SectionHeader({
	variant,
	size,
	children,
}: ISectionHeaderProps) {
	const variance = useSectionHeaderVariance({ variant, size });

	return (
		<SectionHeaderProvider value={variance}>
			<div className={cn(sectionHeaderVariants(variance))} data-block="contain">
				{children}
			</div>
		</SectionHeaderProvider>
	);
}
