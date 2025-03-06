import { ResolveComponentResultWithType } from "./models";

import { PageComposition } from "../components/pageComposition";
import { Hero } from "../components/hero";
import { ReactNode } from "react";

// existing props
export type HeroProps = {
    title: string | ReactNode;
    description: string | ReactNode;
};

export const heroMapping: ResolveComponentResultWithType<HeroProps> = {
    type: "hero",
    component: Hero,
    parameters: {
        title: {
            className: "title",
            as: "h1",
        },
        description: {},
    },
};

export const compositionMapping: ResolveComponentResultWithType = {
    type: "page",
    component: PageComposition,
};
