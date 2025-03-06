import { HeroProps } from "@/uniform/mappings";

export const Hero = ({ title, description }: HeroProps) => (
  <>
    {/* conditionally render title if it's a React component (when using UniformText ) or a string */}
    {typeof title === "string" ? <h1 className="title">{title}</h1> : title}
    {/* conditionally render description if it's a React component (when using UniformRichText ) or a string */}
    {typeof description === "string" ? (
      <p className="description">{description}</p>
    ) : (
      description
    )}
  </>
);
