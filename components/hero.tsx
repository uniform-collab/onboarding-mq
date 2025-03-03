import {
  ComponentProps,
  UniformRichText,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";
import { ParameterRichTextValue } from "@uniformdev/richtext";

export const Hero = ({
  title,
  description,
  component,
  context,
}: ComponentProps<HeroProps>) => {
  return (
    <>
      <UniformText
        as={"h1"}
        parameterId="title"
        className="title"
        context={context}
        component={component}
      />
      <UniformRichText
        parameterId="description"
        className="description"
        placeholder={"enter rich text here"}
        component={component}
        context={context}
      />

      {/* SDK-less example */}
      {/* <h1 className="title">{title}</h1> */}
      {/* <div
        className="description"
        dangerouslySetInnerHTML={{
          __html: renderToHtml(description?.root),
        }}
      /> */}
    </>
  );
};

export type HeroProps = {
  title: string;
  description: ParameterRichTextValue;
};
