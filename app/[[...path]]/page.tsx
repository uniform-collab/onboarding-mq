import {
  UniformComposition,
  PageParameters,
  retrieveRoute,
} from "@uniformdev/canvas-next-rsc";
import { resolveComponent } from "@/uniform/resolve";

export default async function HomePage(props: PageParameters) {
  const route = await retrieveRoute(props);
  return (
    <>
      {"header goes here"}
      <UniformComposition
        {...props}
        route={route}
        resolveComponent={resolveComponent}
        mode="server"
      />
      {"footer goes here"}
    </>
  );
}
