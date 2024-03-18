import JobFilterSidebar from "@/components/job-filter-sidebar";

import JobResults from "@/components/job-results";
import H1 from "@/components/ui/h1";
import { JobFilterValues } from "@/lib/validation";
import { Metadata } from "next";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?:string;
  };
}

function getTitle({ location, q, remote, type }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} Jobs`
    : type
      ? `${type} developer jobs`
      : remote
        ? "Remote Developer Jobs"
        : "All developer jobs";
  const titleSuffic = location ? ` in ${location}` : "";

  return `${titlePrefix}${titleSuffic}`;
}

export function generateMetadata({
  searchParams: { location, q, remote, type },
}: PageProps): Metadata {
  return {
    title: `${getTitle({
      q,
      type,
      location,
      remote: remote === "true",
    })} | Flow Jobs`,
  };
}

export default async function Home({
  searchParams: { location, q, remote, type,page }
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    location,
    remote: remote === "true",
    type,
  };
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{getTitle(filterValues)}</H1>

        <p className="text-muted-foreground">Find your dream Job.</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row ">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults filterValues={filterValues}  page={page ? parseInt(page) : undefined} />
      </section>
    </main>
  );
}
