"use client";

import { ComponentProps, createContext, useContext } from "react";

export type ISectionHeaderVariance = {
	variant?: "editorial" | "center" | null;
	size?: "base" | "sm" | "xl" | null;
};

export interface ISectionHeaderProps
	extends ISectionHeaderVariance, ComponentProps<"div"> {}

export const DEFAULT_VARIANCE: ISectionHeaderVariance = {
	variant: "editorial",
	size: "xl",
};

const SectionHeaderContext =
	createContext<ISectionHeaderVariance>(DEFAULT_VARIANCE);

export function useSectionHeaderVariance(
	overrides: ISectionHeaderVariance = {},
): ISectionHeaderVariance {
	const inherited = useContext(SectionHeaderContext);

	return {
		variant: overrides.variant ?? inherited.variant,
		size: overrides.size ?? inherited.size,
	};
}

export const SectionHeaderProvider = SectionHeaderContext.Provider;
