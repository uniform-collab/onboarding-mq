import { ResolveComponentResultWithType } from "./models";

import { PageComposition } from "../components/pageComposition";
import { Hero } from "../components/hero";
// components will be registered here

export const heroMapping: ResolveComponentResultWithType = {
    type: "hero",
    component: Hero,
};

export const compositionMapping: ResolveComponentResultWithType = {
    type: "page",
    component: PageComposition,
};