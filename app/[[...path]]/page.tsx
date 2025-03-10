import {
  UniformComposition,
  PageParameters,
  retrieveRoute,
  ContextUpdateTransfer,
  createServerUniformContext,
} from "@uniformdev/canvas-next-rsc";
import { resolveComponent } from "@/uniform/resolve";
import { headers } from "next/headers";

export default async function HomePage(props: PageParameters) {
  const route = await retrieveRoute(props);
  const headersList = headers();
  const ip = headersList.get("x-nf-client-connection-ip");
  const companyData = await fetch(
    `https://reveal.clearbit.com/v1/companies/find?ip=${ip}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CLEARBIT_REVEAL_API_KEY}`,
      },
    }
  );
  let quirks = {};
  if (companyData.ok) {
    const { role, seniority, company } = await companyData.json();
    const { logo, name, metrics } = company || {};
    const { employees } = metrics || 0;
    quirks = {
      employees,
      companyName: name,
      companyLogo: logo,
      personRole: role,
      personSeniority: seniority,
    };
  }

  const serverContext = await createServerUniformContext({
    searchParams: await props.searchParams,
  });

  return (
    <>
      <ContextUpdateTransfer
        serverContext={serverContext}
        update={{
          quirks,
        }}
      />
      {"header goes here"}
      <UniformComposition
        {...props}
        route={route}
        serverContext={serverContext}
        resolveComponent={resolveComponent}
        mode="server"
      />
      {"footer goes here"}
    </>
  );
}

export const runtime = "edge";
