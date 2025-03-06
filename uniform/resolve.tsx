import {
  ComponentProps,
  DefaultNotImplementedComponent,
  ResolveComponentFunction,
} from "@uniformdev/canvas-next-rsc/component";
import * as mappings from "./mappings";
import { ResolveComponentResultWithType } from "./models";
import { WrappingComponent } from "./wrappingComponent";

export const resolveComponent: ResolveComponentFunction = ({ component }) => {
  let result: Omit<ResolveComponentResultWithType, "type"> = {
    component: DefaultNotImplementedComponent,
  };

  const keys = Object.keys(mappings);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]!;

    const mapping = mappings[key as keyof typeof mappings] as
      | ResolveComponentResultWithType
      | undefined;

    if (mapping?.type === component.type) {
      result = mapping;
      break;
    }
  }

  return {
    component: (props: ComponentProps) => {
      return (
        <WrappingComponent
          {...props}
          resolvedComponent={result.component}
          parameterMappings={result.parameters}
        />
      );
    },
  };
};
