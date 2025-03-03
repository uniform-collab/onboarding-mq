import {
  ComponentProps,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";

export const PageComposition = ({
  component,
  context,
  slots,
}: ComponentProps<PageProps, PageSlots>) => (
  <UniformSlot context={context} data={component} slot={slots.content} />
);

type PageProps = {};
type PageSlots = "content";
