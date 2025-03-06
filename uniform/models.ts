import { ResolveComponentResult } from "@uniformdev/canvas-next-rsc/component";

export type ParameterMapping = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  "children" | "placeholder"
> & {
  as?: React.ElementType;
  parameterId?: string;
};

export type ResolveComponentResultWithType<TProps = unknown> =
  ResolveComponentResult & {
    type: string;
    parameters?: Partial<Record<keyof TProps, ParameterMapping>>;
  };
